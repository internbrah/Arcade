import { NextResponse } from "next/server";
import { Address, decodeEventLog, isAddress, parseAbiItem } from "viem";
import { createPublicClient, http } from "viem";
import { arcadeEscrowAbi, ESCROW_STATE } from "@/lib/contracts/arcadeEscrow";
import { monadTestnet } from "@/lib/wagmi";

export const runtime = "nodejs";

const MIN_WAGER_WEI = 10n ** 18n;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const address = url.searchParams.get("address") || "";

  if (!isAddress(address)) {
    return NextResponse.json({ error: "Invalid address" }, { status: 400 });
  }

  const rpcUrl =
    process.env.MONAD_RPC_URL ||
    process.env.NEXT_PUBLIC_MONAD_RPC_URL ||
    "https://testnet-rpc.monad.xyz";

  if (!process.env.NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const client = createPublicClient({
    chain: monadTestnet,
    transport: http(rpcUrl, {
      timeout: 30000,
      retryCount: 3,
      retryDelay: 1000,
    })
  });

  try {
    // First, test if RPC is working with a simple call
    let blockNumber: bigint;
    try {
      blockNumber = await client.getBlockNumber();
    } catch (rpcErr: any) {
      return NextResponse.json({
        error: "RPC connection failed",
        details: rpcErr?.message || String(rpcErr),
        rpcUrl,
      }, { status: 500 });
    }

    // Monad RPC limits eth_getLogs to 100 blocks, so we query in chunks
    const CHUNK_SIZE = 99n;
    const LOOKBACK = 3000n;
    const fromBlock = blockNumber > LOOKBACK ? blockNumber - LOOKBACK : 0n;
    
    const logs: any[] = [];
    const event = parseAbiItem(
      "event ChallengeCreated(uint256 indexed matchId,address indexed creator,address indexed opponent,uint256 wager,uint32 gameId,uint64 acceptBy,uint64 resolveBy,bytes32 metaHash)"
    );
    
    // Query in chunks of 99 blocks
    for (let start = fromBlock; start <= blockNumber; start += CHUNK_SIZE) {
      const end = start + CHUNK_SIZE > blockNumber ? blockNumber : start + CHUNK_SIZE;
      try {
        const chunkLogs = await client.getLogs({
          address: process.env.NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS as Address,
          event,
          fromBlock: start,
          toBlock: end
        });
        logs.push(...chunkLogs);
      } catch {
        // Skip failed chunks
      }
    }

    const decoded = logs
      .map((log) => {
        const decodedEvent = decodeEventLog({
          abi: arcadeEscrowAbi,
          data: log.data,
          topics: log.topics
        });
        return {
          matchId: decodedEvent.args.matchId as bigint,
          creator: decodedEvent.args.creator as Address,
          opponent: decodedEvent.args.opponent as Address,
          wager: decodedEvent.args.wager as bigint,
          acceptBy: decodedEvent.args.acceptBy as bigint,
          resolveBy: decodedEvent.args.resolveBy as bigint
        };
      })
      .filter((evt) => evt.opponent.toLowerCase() === address.toLowerCase());

    const withState = await Promise.all(
      decoded.map(async (evt) => {
        const match = (await client.readContract({
          address: process.env.NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS as Address,
          abi: arcadeEscrowAbi,
          functionName: "matches",
          args: [evt.matchId]
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
        return { event: evt, state: match[7] };
      })
    );

    const pending = withState
      .filter((item) => item.state === ESCROW_STATE.OPEN && item.event.wager >= MIN_WAGER_WEI)
      .map((item) => item.event)
      .sort((a, b) => (a.wager > b.wager ? -1 : 1))
      .map((evt) => ({
        matchId: evt.matchId.toString(),
        creator: evt.creator,
        opponent: evt.opponent,
        wager: evt.wager.toString(),
        acceptBy: evt.acceptBy.toString(),
        resolveBy: evt.resolveBy.toString()
      }));

    return NextResponse.json({ challenges: pending, blockNumber: blockNumber.toString() });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.shortMessage || err?.message || "Failed to load challenges",
        stack: err?.stack?.slice(0, 500),
        rpcUrl,
      },
      { status: 500 }
    );
  }
}