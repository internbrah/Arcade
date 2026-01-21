"use client";

import { useEffect, useMemo, useState } from "react";
import { Address, decodeEventLog, formatEther, parseAbiItem } from "viem";
import { useAccount, useChainId, usePublicClient, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { arcadeEscrowAbi, ESCROW_STATE, getArcadeEscrowAddress } from "../lib/contracts/arcadeEscrow";
import { sudokuArenaAbi, getSudokuArenaAddress } from "../lib/contracts/sudokuArena";
import { monadTestnet } from "../lib/wagmi";

type PendingChallenge = {
  matchId: bigint;
  creator: Address;
  opponent: Address;
  wager: bigint;
  acceptBy: bigint;
  resolveBy: bigint;
};

const MIN_WAGER_WEI = 10n ** 18n;

export default function PendingChallenges() {
  const { address } = useAccount();
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const escrowAddress = getArcadeEscrowAddress();
  const arenaAddress = getSudokuArenaAddress();
  const [challenges, setChallenges] = useState<PendingChallenge[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [status, setStatus] = useState("Idle");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const [accepting, setAccepting] = useState<bigint | null>(null);
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);

  const { writeContractAsync } = useWriteContract();
  const { isLoading: isConfirming } = useWaitForTransactionReceipt({
    hash: txHash || undefined
  });

  const isReady = Boolean(address && publicClient && escrowAddress && mounted);
  const isMonad = chainId === monadTestnet.id;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isReady) {
      setChallenges([]);
      return;
    }

    let cancelled = false;

    const load = async () => {
      if (!publicClient || !escrowAddress || !address) return;
      setStatus("Loading...");
      setError("");

      try {
        const logs = await publicClient.getLogs({
          address: escrowAddress,
          event: parseAbiItem(
            "event ChallengeCreated(uint256 indexed matchId,address indexed creator,address indexed opponent,uint256 wager,uint32 gameId,uint64 acceptBy,uint64 resolveBy,bytes32 metaHash)"
          ),
          fromBlock: 0n
        });

        const decoded = logs
          .map((log) => {
            const event = decodeEventLog({
              abi: arcadeEscrowAbi,
              data: log.data,
              topics: log.topics
            });
            return {
              matchId: event.args.matchId as bigint,
              creator: event.args.creator as Address,
              opponent: event.args.opponent as Address,
              wager: event.args.wager as bigint,
              acceptBy: event.args.acceptBy as bigint,
              resolveBy: event.args.resolveBy as bigint
            };
          })
          .filter((event) => event.opponent.toLowerCase() === address.toLowerCase());

        const withState = await Promise.all(
          decoded.map(async (event) => {
            const match = (await publicClient.readContract({
              address: escrowAddress,
              abi: arcadeEscrowAbi,
              functionName: "matches",
              args: [event.matchId]
            })) as readonly [
              Address,
              Address,
              bigint,
              number,
              bigint,
              bigint,
              bigint,
              number,
              Address,
              `0x${string}`
            ];
            return { event, state: match[7] };
          })
        );

        const pending = withState
          .filter((item) => item.state === ESCROW_STATE.OPEN && item.event.wager >= MIN_WAGER_WEI)
          .map((item) => item.event)
          .sort((a, b) => (a.wager > b.wager ? -1 : 1));

        if (!cancelled) {
          setChallenges(pending);
          setStatus("Loaded");
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err?.shortMessage || err?.message || "Failed to load challenges");
          setStatus("Error");
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [address, escrowAddress, isReady, publicClient, refreshKey]);

  const content = useMemo(() => {
    if (!mounted) return "Loading challenges...";
    if (!escrowAddress) return "Missing NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS";
    if (!address) return "Connect wallet to view pending challenges.";
    if (error) return error;
    if (status === "Loading...") return "Loading challenges...";
    if (!challenges.length) return "No pending challenges.";
    return null;
  }, [address, challenges.length, error, escrowAddress, status, mounted]);

  const handleAccept = async (challenge: PendingChallenge) => {
    if (!escrowAddress || !arenaAddress) {
      setError("Missing contract address");
      return;
    }
    if (!isMonad) {
      setError("Switch to Monad Testnet.");
      return;
    }
    setError("");
    setAccepting(challenge.matchId);
    setTxHash(null);

    try {
      const hash = await writeContractAsync({
        abi: arcadeEscrowAbi,
        address: escrowAddress,
        functionName: "acceptChallenge",
        args: [challenge.matchId],
        value: challenge.wager
      });
      setTxHash(hash);
      await publicClient?.waitForTransactionReceipt({ hash });

      const acceptHash = await writeContractAsync({
        abi: sudokuArenaAbi,
        address: arenaAddress,
        functionName: "acceptMatch",
        args: [challenge.matchId]
      });
      setTxHash(acceptHash);

      setStatus("Challenge accepted.");
      setRefreshKey((prev) => prev + 1);
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Accept failed");
    } finally {
      setAccepting(null);
    }
  };

  return (
    <aside className="card">
      <div className="row">
        <h3>Pending Challenges</h3>
        <button className="secondary" onClick={() => setRefreshKey((prev) => prev + 1)}>
          Refresh
        </button>
      </div>

      {content ? <p className="muted">{content}</p> : null}

      {challenges.map((challenge) => (
        <div key={challenge.matchId.toString()} className="challenge-item">
          <p className="mono">Match #{challenge.matchId.toString()}</p>
          <p className="muted">From: {challenge.creator}</p>
          <p>
            Wager: <strong>{formatEther(challenge.wager)} MON</strong>
          </p>
          <button
            className="secondary"
            onClick={() => handleAccept(challenge)}
            disabled={!isMonad || isConfirming || accepting === challenge.matchId}
          >
            {accepting === challenge.matchId ? "Accepting..." : "Accept Challenge"}
          </button>
        </div>
      ))}
    </aside>
  );
}
