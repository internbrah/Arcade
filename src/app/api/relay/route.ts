import { NextResponse } from "next/server";
import { createPublicClient, createWalletClient, http, verifyMessage } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sudokuArenaAbi } from "@/lib/contracts/sudokuArena";
import { monadTestnet } from "@/lib/wagmi";

type RelayRequest = {
  matchId: number;
  row: number;
  col: number;
  value: number;
  player: `0x${string}`;
  expiresAt: number;
  signature: `0x${string}`;
};

function buildSessionMessage(player: string, expiresAt: number) {
  return `Arcade2 Relayer Session
address:${player}
expiresAt:${expiresAt}
chainId:${monadTestnet.id}`;
}

export async function POST(req: Request) {
  const body = (await req.json()) as RelayRequest;
  const { matchId, row, col, value, player, expiresAt, signature } = body;

  if (!process.env.RELAYER_PRIVATE_KEY || !process.env.MONAD_RPC_URL) {
    return NextResponse.json({ error: "Relayer not configured" }, { status: 500 });
  }

  if (!process.env.NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS) {
    return NextResponse.json({ error: "Sudoku arena address missing" }, { status: 500 });
  }

  if (!player || !signature || !Number.isFinite(expiresAt)) {
    return NextResponse.json({ error: "Invalid session payload" }, { status: 400 });
  }

  if (Date.now() > expiresAt) {
    return NextResponse.json({ error: "Session expired" }, { status: 401 });
  }

  const message = buildSessionMessage(player, expiresAt);
  const isValid = await verifyMessage({
    address: player,
    message,
    signature
  });

  if (!isValid) {
    return NextResponse.json({ error: "Invalid session signature" }, { status: 401 });
  }

  const rawKey = process.env.RELAYER_PRIVATE_KEY || "";
  const normalizedKey = rawKey.startsWith("0x") ? rawKey : `0x${rawKey}`;
  const account = privateKeyToAccount(normalizedKey as `0x${string}`);
  const transport = http(process.env.MONAD_RPC_URL);
  const publicClient = createPublicClient({
    chain: monadTestnet,
    transport
  });
  const walletClient = createWalletClient({
    account,
    chain: monadTestnet,
    transport
  });

  try {
    const hash = await walletClient.writeContract({
      address: process.env.NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS as `0x${string}`,
      abi: sudokuArenaAbi,
      functionName: "submitMoveFor",
      args: [BigInt(matchId), player, row, col, value]
    });

    await publicClient.waitForTransactionReceipt({ hash });

    return NextResponse.json({ hash });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.shortMessage || err?.message || "Relay failed" },
      { status: 500 }
    );
  }
}
