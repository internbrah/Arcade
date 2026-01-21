"use client";

import { useEffect, useMemo, useState } from "react";
import { decodeEventLog, isAddress, keccak256, parseEther, stringToHex } from "viem";
import { useAccount, useChainId, usePublicClient, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { arcadeEscrowAbi, getArcadeEscrowAddress } from "../lib/contracts/arcadeEscrow";
import { sudokuArenaAbi, getSudokuArenaAddress } from "../lib/contracts/sudokuArena";
import { monadTestnet } from "../lib/wagmi";

const MIN_WAGER = 1;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateChallengeModal({ isOpen, onClose }: Props) {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const [opponentInput, setOpponentInput] = useState("");
  const [gameId, setGameId] = useState(1);
  const [wager, setWager] = useState("1");
  const [acceptMinutes, setAcceptMinutes] = useState("30");
  const [resolveMinutes, setResolveMinutes] = useState("60");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);

  const { writeContractAsync } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash || undefined
  });

  const isMonad = chainId === monadTestnet.id;
  const escrowAddress = getArcadeEscrowAddress();
  const arenaAddress = getSudokuArenaAddress();

  useEffect(() => {
    if (!isOpen) {
      setStatus("");
      setError("");
      setTxHash(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isSuccess) return;
    setStatus("Challenge created!");
    const timer = setTimeout(() => {
      onClose();
    }, 800);
    return () => clearTimeout(timer);
  }, [isSuccess, onClose]);

  const canSubmit = useMemo(() => {
    return Boolean(isConnected && address && isMonad && escrowAddress);
  }, [isConnected, address, isMonad, escrowAddress]);

  if (!isOpen) return null;

  const resolveOpponent = async (): Promise<`0x${string}`> => {
    const raw = opponentInput.trim();
    if (!raw) {
      throw new Error("Opponent is required");
    }
    if (!isAddress(raw)) {
      throw new Error("Opponent must be a 0x address");
    }
    return raw as `0x${string}`;
  };

  const handleCreate = async () => {
    if (!address) return;
    setError("");
    setStatus("");
    setTxHash(null);

    if (!escrowAddress || !arenaAddress) {
      setError("Missing contract address");
      return;
    }
    if (!publicClient) {
      setError("Public client not ready");
      return;
    }
    if (!isConnected) {
      setError("Connect your wallet first");
      return;
    }
    if (!isMonad) {
      setError("Wrong network. Switch to Monad Testnet.");
      return;
    }

    let opponentAddress: `0x${string}`;
    try {
      setStatus("Resolving opponent...");
      opponentAddress = await resolveOpponent();
    } catch (err: any) {
      setError(err?.message || "Failed to resolve opponent");
      setStatus("");
      return;
    }

    if (opponentAddress.toLowerCase() === address.toLowerCase()) {
      setError("Opponent cannot be your own address");
      setStatus("");
      return;
    }

    let wagerWei: bigint;
    try {
      wagerWei = parseEther(wager);
    } catch {
      setError("Invalid wager");
      setStatus("");
      return;
    }
    if (wagerWei < parseEther(String(MIN_WAGER))) {
      setError(`Wager must be at least ${MIN_WAGER} MON`);
      setStatus("");
      return;
    }

    const nowSeconds = Math.floor(Date.now() / 1000);
    const acceptBy = nowSeconds + Number(acceptMinutes) * 60;
    const resolveBy = acceptBy + Number(resolveMinutes) * 60;
    if (!Number.isFinite(acceptBy) || acceptBy <= nowSeconds) {
      setError("Accept window must be in the future");
      setStatus("");
      return;
    }
    if (!Number.isFinite(resolveBy) || resolveBy <= acceptBy) {
      setError("Resolve window must be after accept window");
      setStatus("");
      return;
    }

    const meta = {
      gameId,
      wager: wagerWei.toString(),
      createdBy: address,
      opponent: opponentAddress,
      createdAtMs: Date.now()
    };
    const metaHash = keccak256(stringToHex(JSON.stringify(meta)));

    try {
      setStatus("Sending transaction...");
      const hash = await writeContractAsync({
        abi: arcadeEscrowAbi,
        address: escrowAddress,
        functionName: "createChallenge",
        args: [
          opponentAddress,
          gameId,
          BigInt(acceptBy),
          BigInt(resolveBy),
          metaHash
        ],
        value: wagerWei
      });
      setTxHash(hash);
      setStatus("Challenge created. Linking PvP match...");

      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      const log = receipt?.logs.find((l) => l.address.toLowerCase() === escrowAddress.toLowerCase());
      if (!log) {
        setStatus("Challenge created. Match id not found.");
        return;
      }
      const decoded = decodeEventLog({
        abi: arcadeEscrowAbi,
        data: log.data,
        topics: log.topics
      });
      if (decoded.eventName !== "ChallengeCreated") {
        setStatus("Challenge created. Match id missing.");
        return;
      }

      const matchId = decoded.args.matchId as bigint;
      await writeContractAsync({
        abi: sudokuArenaAbi,
        address: arenaAddress,
        functionName: "createPvpMatch",
        args: [
          matchId,
          opponentAddress,
          gameId,
          BigInt(acceptBy),
          BigInt(resolveBy)
        ]
      });
      setStatus(`PvP match linked (#${matchId.toString()}).`);
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Transaction failed");
      setStatus("");
    }
  };

  const handleClose = () => {
    if (isConfirming) return;
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Create Challenge</h2>
          <button className="secondary" onClick={handleClose}>
            Close
          </button>
        </div>

        {!escrowAddress ? (
          <p className="error">Missing NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS</p>
        ) : null}

        <label className="field">
          <span>Opponent</span>
          <input
            type="text"
            placeholder="0x..."
            value={opponentInput}
            onChange={(event) => setOpponentInput(event.target.value)}
          />
        </label>

        <label className="field">
          <span>Game</span>
          <select value={gameId} onChange={(event) => setGameId(Number(event.target.value))}>
            <option value={1}>Sudoku</option>
          </select>
        </label>

        <label className="field">
          <span>Wager (MON)</span>
          <input
            type="number"
            min={MIN_WAGER}
            step="0.01"
            value={wager}
            onChange={(event) => setWager(event.target.value)}
          />
        </label>

        <div className="row">
          <label className="field">
            <span>Accept window (minutes)</span>
            <input
              type="number"
              min="1"
              step="1"
              value={acceptMinutes}
              onChange={(event) => setAcceptMinutes(event.target.value)}
            />
          </label>
          <label className="field">
            <span>Resolve window (minutes)</span>
            <input
              type="number"
              min="1"
              step="1"
              value={resolveMinutes}
              onChange={(event) => setResolveMinutes(event.target.value)}
            />
          </label>
        </div>

        <div className="row">
          <button onClick={handleCreate} disabled={!canSubmit || isConfirming}>
            Create challenge
          </button>
          {status ? <span className="muted">{status}</span> : null}
        </div>

        {isConfirming ? <p className="muted">Waiting for confirmation...</p> : null}
        {error ? <p className="error">{error}</p> : null}

        <p className="muted">Minimum wager: {MIN_WAGER} MON.</p>
      </div>
    </div>
  );
}
