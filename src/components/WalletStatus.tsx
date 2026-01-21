"use client";

import { useEffect, useState } from "react";
import { formatEther } from "viem";
import {
  useAccount,
  useBalance,
  useChainId,
  useConnect,
  useDisconnect,
  usePublicClient
} from "wagmi";
import { monadTestnet } from "../lib/wagmi";

export default function WalletStatus() {
  const [mounted, setMounted] = useState(false);
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const { data: balance, isLoading: isBalanceLoading, isError: isBalanceError } = useBalance({
    address,
    chainId: monadTestnet.id,
    query: {
      enabled: Boolean(address)
    }
  });
  const chainId = useChainId();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  const isCorrectChain = chainId === monadTestnet.id;
  const [directBalance, setDirectBalance] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !address || !publicClient || !isCorrectChain) {
      setDirectBalance(null);
      return;
    }

    let cancelled = false;
    const loadBalance = async () => {
      try {
        const value = await publicClient.getBalance({ address });
        if (!cancelled) {
          setDirectBalance(formatEther(value));
        }
      } catch {
        if (!cancelled) {
          setDirectBalance(null);
        }
      }
    };

    loadBalance();
    return () => {
      cancelled = true;
    };
  }, [address, isCorrectChain, mounted, publicClient]);

  if (!mounted) {
    return (
      <div className="card">
        <h3>Wallet</h3>
        <p className="muted">Loading wallet status...</p>
      </div>
    );
  }

  return (
    <div className="card wallet-card">
      <h3>Wallet</h3>
      {isConnected ? (
        <>
          <p className="muted">
            Connected: <span className="mono">{address}</span>
          </p>
          <p className="muted">
            Balance:{" "}
            <span className="mono">
              {isBalanceError
                ? "Unavailable"
                : isBalanceLoading && !directBalance
                  ? "Loading..."
                  : directBalance
                    ? `${Number(directBalance).toFixed(4)} MON`
                    : balance?.value !== undefined
                      ? `${Number(formatEther(balance.value)).toFixed(4)} ${balance.symbol || "MON"}`
                      : "0.0000 MON"}
            </span>
          </p>
          <p className={isCorrectChain ? "success" : "error"}>
            {isCorrectChain ? "Monad Testnet" : `Wrong network (${chainId})`}
          </p>
          <button className="secondary" onClick={() => disconnect()}>
            Disconnect
          </button>
        </>
      ) : (
        <>
          <p className="muted">Connect your wallet to view challenges.</p>
          <button
            onClick={() => connect({ connector: connectors[0] })}
            disabled={isPending}
          >
            Connect Wallet
          </button>
        </>
      )}
    </div>
  );
}
