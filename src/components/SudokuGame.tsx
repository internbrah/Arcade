"use client";

import { useEffect, useMemo, useState } from "react";
import { Address, decodeEventLog, Hex } from "viem";
import {
  useAccount,
  useChainId,
  usePublicClient,
  useSignMessage,
  useSwitchChain,
  useWaitForTransactionReceipt,
  useWriteContract
} from "wagmi";
import { sudokuArenaAbi, getSudokuArenaAddress } from "../lib/contracts/sudokuArena";
import { monadTestnet } from "../lib/wagmi";

type PendingKey = `${number}-${number}`;

const emptyGrid = () => Array.from({ length: 9 }, () => Array(9).fill(0));

function unpackPuzzle(packed: Hex): number[][] {
  const bytes = Array.from(Buffer.from(packed.slice(2), "hex"));
  const flat: number[] = [];
  for (let i = 0; i < 81; i += 1) {
    const byte = bytes[Math.floor(i / 2)] || 0;
    const value = i % 2 === 0 ? byte >> 4 : byte & 0x0f;
    flat.push(value);
  }
  const grid: number[][] = [];
  for (let r = 0; r < 9; r += 1) {
    grid.push(flat.slice(r * 9, r * 9 + 9));
  }
  return grid;
}

export default function SudokuGame() {
  const { address } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const publicClient = usePublicClient();
  const [matchIdInput, setMatchIdInput] = useState("0");
  const [matchId, setMatchId] = useState<number | null>(null);
  const [grid, setGrid] = useState<number[][]>(() => emptyGrid());
  const [givens, setGivens] = useState<number[][]>(() => emptyGrid());
  const [pendingCells, setPendingCells] = useState<Set<PendingKey>>(new Set());
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(
    null
  );
  const [selectedValue, setSelectedValue] = useState(0);
  const [useRelayer, setUseRelayer] = useState(true);
  const [relayerSession, setRelayerSession] = useState<{
    expiresAt: number;
    signature: `0x${string}`;
  } | null>(null);

  const { writeContractAsync } = useWriteContract();
  const { signMessageAsync } = useSignMessage();
  const { isLoading: isConfirming } = useWaitForTransactionReceipt({
    hash: txHash || undefined
  });

  const arenaAddress = getSudokuArenaAddress();
  const isMonad = chainId === monadTestnet.id;
  const canUseArena = Boolean(arenaAddress && isMonad);

  const canSubmit = useMemo(() => {
    return Boolean(canUseArena && matchId && matchId > 0);
  }, [canUseArena, matchId]);

  useEffect(() => {
    if (!mounted) return;
    const stored = localStorage.getItem("arcade2-relayer-session");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as { expiresAt: number; signature: `0x${string}` };
      if (Date.now() < parsed.expiresAt) {
        setRelayerSession(parsed);
      }
    } catch {
      localStorage.removeItem("arcade2-relayer-session");
    }
  }, [mounted]);

  const invalidCells = useMemo(() => {
    const next = new Set<string>();

    const markInvalid = (row: number, col: number) => {
      next.add(`${row}-${col}`);
    };

    for (let r = 0; r < 9; r += 1) {
      for (let c = 0; c < 9; c += 1) {
        const value = grid[r][c];
        if (value === 0) continue;

        for (let cc = 0; cc < 9; cc += 1) {
          if (cc !== c && grid[r][cc] === value) {
            markInvalid(r, c);
            markInvalid(r, cc);
          }
        }

        for (let rr = 0; rr < 9; rr += 1) {
          if (rr !== r && grid[rr][c] === value) {
            markInvalid(r, c);
            markInvalid(rr, c);
          }
        }

        const boxRow = Math.floor(r / 3) * 3;
        const boxCol = Math.floor(c / 3) * 3;
        for (let rr = boxRow; rr < boxRow + 3; rr += 1) {
          for (let cc = boxCol; cc < boxCol + 3; cc += 1) {
            if ((rr !== r || cc !== c) && grid[rr][cc] === value) {
              markInvalid(r, c);
              markInvalid(rr, cc);
            }
          }
        }
      }
    }

    return next;
  }, [grid]);

  const isComplete = useMemo(() => {
    if (grid.some((row) => row.some((value) => value === 0))) return false;
    return invalidCells.size === 0;
  }, [grid, invalidCells.size]);

  const isConfirmed = useMemo(() => {
    return isComplete && pendingCells.size === 0 && !isConfirming;
  }, [isComplete, pendingCells.size, isConfirming]);

  useEffect(() => {
    if (txHash && !isConfirming) {
      setStatus("Move confirmed.");
    }
  }, [txHash, isConfirming]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!publicClient || !arenaAddress || !matchId || matchId <= 0) {
      setGrid(emptyGrid());
      setGivens(emptyGrid());
      return;
    }

    let cancelled = false;

    const load = async () => {
      try {
        setStatus("Loading puzzle...");
        const match = (await publicClient.readContract({
          address: arenaAddress,
          abi: sudokuArenaAbi,
          functionName: "matches",
          args: [BigInt(matchId)]
        })) as readonly [
          Address,
          Address,
          boolean,
          number,
          bigint,
          bigint,
          bigint,
          number,
          bigint,
          bigint,
          bigint,
          number,
          `0x${string}`
        ];

        const puzzleIndex = match[11];
        const packed = (await publicClient.readContract({
          address: arenaAddress,
          abi: sudokuArenaAbi,
          functionName: "getPackedPuzzle",
          args: [puzzleIndex]
        })) as Hex;

        const decoded = unpackPuzzle(packed);
        if (!cancelled) {
          setGivens(decoded);
          setGrid(decoded.map((row) => row.map((value) => value)));
          setStatus("Puzzle loaded");
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(err?.shortMessage || err?.message || "Failed to load puzzle");
          setStatus("");
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [arenaAddress, matchId, publicClient]);

  const handleCreatePve = async () => {
    if (!arenaAddress) {
      setError("Missing NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS");
      return;
    }
    if (!isMonad) {
      setError("Switch to Monad Testnet to create a match");
      return;
    }
    setError("");
    setStatus("");
    setTxHash(null);

    try {
      setStatus("Creating PvE match...");
      const hash = await writeContractAsync({
        abi: sudokuArenaAbi,
        address: arenaAddress,
        chainId: monadTestnet.id,
        functionName: "createPveMatch",
        args: [1]
      });
      setTxHash(hash);
      setStatus("Waiting for match creation...");

      await publicClient?.waitForTransactionReceipt({ hash });

      let createdId: number | null = null;
      const receipt = await publicClient?.getTransactionReceipt({ hash });
      const matchLog = receipt?.logs.find(
        (l) => l.address.toLowerCase() === arenaAddress.toLowerCase()
      );
      if (matchLog) {
        const decoded = decodeEventLog({
          abi: sudokuArenaAbi,
          data: matchLog.data,
          topics: matchLog.topics
        });
        if (decoded.eventName === "MatchCreated") {
          createdId = Number(decoded.args.matchId);
        }
      }

      if (!createdId && publicClient) {
        const nextId = (await publicClient.readContract({
          address: arenaAddress,
          abi: sudokuArenaAbi,
          functionName: "nextMatchId"
        })) as bigint;
        createdId = Number(nextId);
      }

      if (createdId) {
        setMatchId(createdId);
        setMatchIdInput(String(createdId));
        setStatus(`Match #${createdId} ready`);
      } else {
        setStatus("Match created, but could not read match id");
      }
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Match creation failed");
      setStatus("");
    }
  };

  const handleLoadMatch = () => {
    const id = Number(matchIdInput);
    if (!Number.isInteger(id) || id <= 0) {
      setError("Invalid match id");
      return;
    }
    setError("");
    setMatchId(id);
  };

  const handleChange = async (row: number, col: number, value: string) => {
    if (!isMonad) {
      setError("Switch to Monad Testnet to submit moves");
      return;
    }
    if (!canSubmit) {
      setError("Create or load a match first");
      return;
    }
    if (givens[row][col] !== 0) {
      setError("Cannot change a fixed cell");
      return;
    }
    setError("");
    setStatus("");

    const digit = value === "" ? 0 : Number(value);
    if (Number.isNaN(digit) || digit < 0 || digit > 9) return;

    setSelectedValue(digit);
    setSelectedCell({ row, col });

    const key: PendingKey = `${row}-${col}`;
    setPendingCells((prev) => new Set(prev).add(key));

    try {
      setStatus("Submitting move...");
      if (useRelayer && relayerSession && address) {
        const response = await fetch("/api/relay", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            matchId,
            row,
            col,
            value: digit,
            player: address,
            expiresAt: relayerSession.expiresAt,
            signature: relayerSession.signature
          })
        });
        let json: any = null;
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          json = await response.json();
        }
        if (!response.ok) {
          const fallback = json?.error || `Relayer failed (${response.status})`;
          throw new Error(fallback);
        }
        if (json?.hash) {
          setTxHash(json.hash as `0x${string}`);
        }
        setStatus("Move relayed. Waiting for confirmation...");
      } else {
        const hash = await writeContractAsync({
          abi: sudokuArenaAbi,
          address: arenaAddress!,
          chainId: monadTestnet.id,
          functionName: "submitMove",
          args: [BigInt(matchId), row, col, digit]
        });
        setTxHash(hash);
        setStatus("Move submitted. Waiting for confirmation...");
      }

      setGrid((prev) => {
        const next = prev.map((r) => [...r]);
        next[row][col] = digit;
        return next;
      });
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Move failed");
    } finally {
      setPendingCells((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    }
  };

  const handleEnableRelayer = async () => {
    if (!address) {
      setError("Connect your wallet first");
      return;
    }
    const expiresAt = Date.now() + 1000 * 60 * 60 * 6;
    const message = `Arcade2 Relayer Session
address:${address}
expiresAt:${expiresAt}
chainId:${monadTestnet.id}`;
    try {
      const signature = await signMessageAsync({ message });
      const session = { expiresAt, signature };
      localStorage.setItem("arcade2-relayer-session", JSON.stringify(session));
      setRelayerSession(session);
      setError("");
      setStatus("Relayer session enabled");
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Relayer auth failed");
    }
  };

  return (
    <section className="card">
      <div className="row">
        <h2>Sudoku (On-chain moves)</h2>
        <span className="muted">
          {matchId ? `Match #${matchId}` : "No match loaded"}
        </span>
      </div>

      {!arenaAddress ? (
        <p className="error">Missing NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS</p>
      ) : null}
      {!mounted ? (
        <p className="muted">Loading match controls...</p>
      ) : null}
      {mounted && !isMonad && arenaAddress ? (
        <div className="row">
          <p className="error">Wrong network. Switch to Monad Testnet.</p>
          <button className="secondary" onClick={() => switchChain({ chainId: monadTestnet.id })}>
            Switch Network
          </button>
        </div>
      ) : null}

      <div className="row">
        <button
          onClick={handleCreatePve}
          disabled={!mounted || !address || !arenaAddress || !isMonad}
        >
          Create PvE Match
        </button>
        <div className="row">
          <input
            type="number"
            min="1"
            step="1"
            value={matchIdInput}
            onChange={(event) => setMatchIdInput(event.target.value)}
            disabled={!mounted}
          />
          <button className="secondary" onClick={handleLoadMatch} disabled={!mounted}>
            Load Match
          </button>
        </div>
      </div>

      <div className="row">
        <label className="row muted">
          <input
            type="checkbox"
            checked={useRelayer}
            onChange={(event) => setUseRelayer(event.target.checked)}
            disabled={!mounted}
          />
          Use relayer (fewer approvals)
        </label>
        {useRelayer ? (
          <button
            className="secondary"
            onClick={handleEnableRelayer}
            disabled={!mounted || !address}
          >
            {relayerSession ? "Relayer enabled" : "Enable relayer"}
          </button>
        ) : null}
      </div>

      <div className="sudoku-grid">
        {grid.map((row, r) =>
          row.map((value, c) => {
            const key: PendingKey = `${r}-${c}`;
            const isPending = pendingCells.has(key);
            const isFixed = givens[r][c] !== 0;
            const isHighlighted = selectedValue > 0 && value === selectedValue;
            const isRowCol =
              selectedCell && (selectedCell.row === r || selectedCell.col === c);
            const isBox =
              selectedCell &&
              Math.floor(selectedCell.row / 3) === Math.floor(r / 3) &&
              Math.floor(selectedCell.col / 3) === Math.floor(c / 3);
            const isInvalid = invalidCells.has(key);
            return (
              <input
                key={key}
                className={`sudoku-cell ${isPending ? "pending" : ""} ${
                  isFixed ? "fixed" : ""
                } ${isHighlighted ? "highlight" : ""} ${
                  isRowCol ? "rowcol" : ""
                } ${isBox ? "box" : ""} ${isInvalid ? "invalid" : ""}`}
                inputMode="numeric"
                maxLength={1}
                value={value === 0 ? "" : value}
                onChange={(event) => handleChange(r, c, event.target.value)}
                onFocus={() => {
                  setSelectedValue(value);
                  setSelectedCell({ row: r, col: c });
                }}
                onClick={() => {
                  setSelectedValue(value);
                  setSelectedCell({ row: r, col: c });
                }}
                disabled={!canSubmit || isConfirming || isFixed}
                style={{
                  borderRightWidth: c % 3 === 2 ? 2 : 1,
                  borderBottomWidth: r % 3 === 2 ? 2 : 1,
                  borderLeftWidth: c % 3 === 0 ? 2 : 1,
                  borderTopWidth: r % 3 === 0 ? 2 : 1,
                  borderRightColor: c % 3 === 2 ? "#4b4b5a" : undefined,
                  borderBottomColor: r % 3 === 2 ? "#4b4b5a" : undefined,
                  borderLeftColor: c % 3 === 0 ? "#4b4b5a" : undefined,
                  borderTopColor: r % 3 === 0 ? "#4b4b5a" : undefined
                }}
              />
            );
          })
        )}
      </div>

      {isComplete && !isConfirmed ? (
        <p className="success">Solved! Waiting for chain confirmation.</p>
      ) : null}
      {isConfirmed ? <p className="success">Solved! On-chain moves confirmed.</p> : null}
      {status ? <p className="muted">{status}</p> : null}
      {error ? <p className="error">{error}</p> : null}
      <p className="muted">
        Each number entry submits a transaction (including clears).
      </p>
    </section>
  );
}
