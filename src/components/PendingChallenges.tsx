"use client";

import { useEffect, useMemo, useState } from "react";
import { Address, formatEther } from "viem";
import { useAccount, useChainId, usePublicClient, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { arcadeEscrowAbi, getArcadeEscrowAddress } from "../lib/contracts/arcadeEscrow";
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

  const publicClient = usePublicClient();
  const isReady = Boolean(address && escrowAddress && mounted);
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
      if (!escrowAddress || !address) return;
      setStatus("Loading...");
      setError("");

      try {
        const response = await fetch(`/api/challenges?address=${address}`);
        const json = await response.json();
        if (!response.ok) {
          throw new Error(json?.error || "Failed to load challenges");
        }

        const pending = (json?.challenges || []).map((event: any) => ({
          matchId: BigInt(event.matchId),
          creator: event.creator as Address,
          opponent: event.opponent as Address,
          wager: BigInt(event.wager),
          acceptBy: BigInt(event.acceptBy),
          resolveBy: BigInt(event.resolveBy)
        }));

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
