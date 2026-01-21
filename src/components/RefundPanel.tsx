"use client";

import { useState } from "react";
import { useAccount, useChainId, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { arcadeEscrowAbi, getArcadeEscrowAddress } from "../lib/contracts/arcadeEscrow";
import { monadTestnet } from "../lib/wagmi";

export default function RefundPanel() {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const [matchId, setMatchId] = useState("1");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);

  const { writeContractAsync } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash || undefined
  });

  const escrowAddress = getArcadeEscrowAddress();
  const isMonad = chainId === monadTestnet.id;

  const handleRefund = async () => {
    setError("");
    setStatus("");
    setTxHash(null);

    if (!escrowAddress) {
      setError("Missing contract address");
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

    const id = Number(matchId);
    if (!Number.isInteger(id) || id <= 0) {
      setError("Invalid match id");
      return;
    }

    try {
      setStatus("Submitting refund...");
      const hash = await writeContractAsync({
        abi: arcadeEscrowAbi,
        address: escrowAddress,
        functionName: "refund",
        args: [BigInt(id)]
      });
      setTxHash(hash);
      setStatus("Refund submitted");
    } catch (err: any) {
      setError(err?.shortMessage || err?.message || "Refund failed");
      setStatus("");
    }
  };

  return (
    <section className="card">
      <h3>Refund Challenge</h3>
      <p className="muted">Creator-only refunds after accept or resolve deadline.</p>
      <label className="field">
        <span>Match ID</span>
        <input
          type="number"
          min="1"
          step="1"
          value={matchId}
          onChange={(event) => setMatchId(event.target.value)}
        />
      </label>
      <div className="row">
        <button onClick={handleRefund} disabled={isConfirming}>
          Request refund
        </button>
        {status ? <span className="muted">{status}</span> : null}
      </div>
      {isSuccess ? <p className="success">Refund confirmed</p> : null}
      {error ? <p className="error">{error}</p> : null}
    </section>
  );
}
