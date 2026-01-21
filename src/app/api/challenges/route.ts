import { NextResponse } from "next/server";
import { Address, decodeEventLog, isAddress, parseAbiItem } from "viem";
import { createPublicClient, http } from "viem";
import { arcadeEscrowAbi, ESCROW_STATE } from "@/lib/contracts/arcadeEscrow";
import { monadTestnet } from "@/lib/wagmi";

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
    transport: http(rpcUrl)
  });

  try {
    const logs = await client.getLogs({
      address: process.env.NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS as Address,
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
        const match = (await client.readContract({
          address: process.env.NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS as Address,
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
      .sort((a, b) => (a.wager > b.wager ? -1 : 1))
      .map((event) => ({
        matchId: event.matchId.toString(),
        creator: event.creator,
        opponent: event.opponent,
        wager: event.wager.toString(),
        acceptBy: event.acceptBy.toString(),
        resolveBy: event.resolveBy.toString()
      }));

    return NextResponse.json({ challenges: pending });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.shortMessage || err?.message || "Failed to load challenges",
        hint: "Check MONAD_RPC_URL or NEXT_PUBLIC_MONAD_RPC_URL in Vercel env"
      },
      { status: 500 }
    );
  }
}
