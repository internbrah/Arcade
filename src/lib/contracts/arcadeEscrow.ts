import type { Address } from "viem";

export const arcadeEscrowAbi = [
  {
    inputs: [
      { internalType: "address", name: "opponent", type: "address" },
      { internalType: "uint32", name: "gameId", type: "uint32" },
      { internalType: "uint64", name: "acceptBy", type: "uint64" },
      { internalType: "uint64", name: "resolveBy", type: "uint64" },
      { internalType: "bytes32", name: "metaHash", type: "bytes32" }
    ],
    name: "createChallenge",
    outputs: [{ internalType: "uint256", name: "matchId", type: "uint256" }],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "matchId", type: "uint256" }],
    name: "acceptChallenge",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "matchId", type: "uint256" }],
    name: "refund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "matchId", type: "uint256" }],
    name: "matches",
    outputs: [
      { internalType: "address", name: "creator", type: "address" },
      { internalType: "address", name: "opponent", type: "address" },
      { internalType: "uint96", name: "wager", type: "uint96" },
      { internalType: "uint32", name: "gameId", type: "uint32" },
      { internalType: "uint64", name: "createdAt", type: "uint64" },
      { internalType: "uint64", name: "acceptBy", type: "uint64" },
      { internalType: "uint64", name: "resolveBy", type: "uint64" },
      { internalType: "uint8", name: "state", type: "uint8" },
      { internalType: "address", name: "winner", type: "address" },
      { internalType: "bytes32", name: "metaHash", type: "bytes32" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "matchId", type: "uint256" },
      { indexed: true, internalType: "address", name: "creator", type: "address" },
      { indexed: true, internalType: "address", name: "opponent", type: "address" },
      { indexed: false, internalType: "uint256", name: "wager", type: "uint256" },
      { indexed: false, internalType: "uint32", name: "gameId", type: "uint32" },
      { indexed: false, internalType: "uint64", name: "acceptBy", type: "uint64" },
      { indexed: false, internalType: "uint64", name: "resolveBy", type: "uint64" },
      { indexed: false, internalType: "bytes32", name: "metaHash", type: "bytes32" }
    ],
    name: "ChallengeCreated",
    type: "event"
  }
] as const;

export const ESCROW_STATE = {
  NONE: 0,
  OPEN: 1,
  ACCEPTED: 2,
  FINALIZED: 3,
  REFUNDED: 4,
  CANCELED: 5
} as const;

export function getArcadeEscrowAddress(): Address | null {
  const value = process.env.NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS;
  if (!value) return null;
  return value as Address;
}
