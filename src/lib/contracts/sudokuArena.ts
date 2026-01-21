import type { Address } from "viem";

export const sudokuArenaAbi = [
  {
    inputs: [{ internalType: "uint32", name: "gameId", type: "uint32" }],
    name: "createPveMatch",
    outputs: [{ internalType: "uint256", name: "matchId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "escrowMatchId", type: "uint256" },
      { internalType: "address", name: "opponent", type: "address" },
      { internalType: "uint32", name: "gameId", type: "uint32" },
      { internalType: "uint64", name: "acceptBy", type: "uint64" },
      { internalType: "uint64", name: "resolveBy", type: "uint64" }
    ],
    name: "createPvpMatch",
    outputs: [{ internalType: "uint256", name: "matchId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "matchId", type: "uint256" },
      { internalType: "uint8", name: "row", type: "uint8" },
      { internalType: "uint8", name: "col", type: "uint8" },
      { internalType: "uint8", name: "value", type: "uint8" }
    ],
    name: "submitMove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "matchId", type: "uint256" },
      { internalType: "address", name: "player", type: "address" },
      { internalType: "uint8", name: "row", type: "uint8" },
      { internalType: "uint8", name: "col", type: "uint8" },
      { internalType: "uint8", name: "value", type: "uint8" }
    ],
    name: "submitMoveFor",
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
      { internalType: "bool", name: "isPvp", type: "bool" },
      { internalType: "uint8", name: "state", type: "uint8" },
      { internalType: "uint64", name: "createdAt", type: "uint64" },
      { internalType: "uint64", name: "acceptBy", type: "uint64" },
      { internalType: "uint64", name: "resolveBy", type: "uint64" },
      { internalType: "uint32", name: "gameId", type: "uint32" },
      { internalType: "uint256", name: "startBlock", type: "uint256" },
      { internalType: "uint256", name: "creatorFinishBlock", type: "uint256" },
      { internalType: "uint256", name: "opponentFinishBlock", type: "uint256" },
      { internalType: "uint8", name: "puzzleIndex", type: "uint8" },
      { internalType: "bytes32", name: "puzzleHash", type: "bytes32" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint8", name: "index", type: "uint8" }],
    name: "getPackedPuzzle",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "matchId", type: "uint256" },
      { internalType: "uint8", name: "row", type: "uint8" },
      { internalType: "uint8", name: "col", type: "uint8" }
    ],
    name: "getCell",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "matchId", type: "uint256" },
      { indexed: true, internalType: "address", name: "creator", type: "address" },
      { indexed: true, internalType: "address", name: "opponent", type: "address" },
      { indexed: false, internalType: "bool", name: "isPvp", type: "bool" },
      { indexed: false, internalType: "uint32", name: "gameId", type: "uint32" },
      { indexed: false, internalType: "uint64", name: "acceptBy", type: "uint64" },
      { indexed: false, internalType: "uint64", name: "resolveBy", type: "uint64" },
      { indexed: false, internalType: "uint8", name: "puzzleIndex", type: "uint8" },
      { indexed: false, internalType: "bytes32", name: "puzzleHash", type: "bytes32" }
    ],
    name: "MatchCreated",
    type: "event"
  },
  {
    inputs: [],
    name: "nextMatchId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  }
] as const;

export function getSudokuArenaAddress(): Address | null {
  const value = process.env.NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS;
  if (!value) return null;
  return value as Address;
}
