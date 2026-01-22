const { ethers } = require("hardhat");

async function main() {
  const ESCROW_ADDRESS = "0x1eaC5D89E6e5958d978eeD15CC255B77f668CaF7";
  const ARENA_ADDRESS = "0xA975583FE5DeeE7FAf66B7fBf328D897060C7Ed9";
  
  // Change this to your match ID
  const MATCH_ID = 10; // <-- UPDATE THIS to your latest match
  
  console.log("=== Debugging Match #" + MATCH_ID + " ===\n");
  
  // Escrow ABI
  const escrowAbi = [
    "function matches(uint256) view returns (address creator, address opponent, uint96 wager, uint32 gameId, uint64 createdAt, uint64 acceptBy, uint64 resolveBy, uint8 state, address winner, bytes32 metaHash)"
  ];
  
  // Arena ABI
  const arenaAbi = [
    "function matches(uint256) view returns (address creator, address opponent, bool isPvp, uint8 state, uint64 createdAt, uint64 acceptBy, uint64 resolveBy, uint32 gameId, uint256 startBlock, uint256 creatorFinishBlock, uint256 opponentFinishBlock, uint8 puzzleIndex, bytes32 puzzleHash)"
  ];
  
  const [signer] = await ethers.getSigners();
  const escrow = new ethers.Contract(ESCROW_ADDRESS, escrowAbi, signer);
  const arena = new ethers.Contract(ARENA_ADDRESS, arenaAbi, signer);
  
  // Check Escrow state
  console.log("--- ESCROW STATE ---");
  const escrowMatch = await escrow.matches(MATCH_ID);
  console.log("Creator:", escrowMatch.creator);
  console.log("Opponent:", escrowMatch.opponent);
  console.log("Wager:", ethers.formatEther(escrowMatch.wager), "MON");
  console.log("State:", escrowMatch.state, getEscrowState(escrowMatch.state));
  console.log("Winner:", escrowMatch.winner);
  
  // Check Arena state
  console.log("\n--- ARENA STATE ---");
  const arenaMatch = await arena.matches(MATCH_ID);
  console.log("Creator:", arenaMatch.creator);
  console.log("Opponent:", arenaMatch.opponent);
  console.log("Is PvP:", arenaMatch.isPvp);
  console.log("State:", arenaMatch.state, getArenaState(arenaMatch.state));
  console.log("Start Block:", arenaMatch.startBlock.toString());
  console.log("Creator Finish Block:", arenaMatch.creatorFinishBlock.toString());
  console.log("Opponent Finish Block:", arenaMatch.opponentFinishBlock.toString());
  
  // Diagnosis
  console.log("\n--- DIAGNOSIS ---");
  if (arenaMatch.creatorFinishBlock.toString() === "0") {
    console.log("❌ Creator has NOT finished the puzzle on-chain");
  } else {
    console.log("✅ Creator finished at block", arenaMatch.creatorFinishBlock.toString());
  }
  
  if (arenaMatch.opponentFinishBlock.toString() === "0") {
    console.log("❌ Opponent has NOT finished the puzzle on-chain");
  } else {
    console.log("✅ Opponent finished at block", arenaMatch.opponentFinishBlock.toString());
  }
  
  if (Number(escrowMatch.state) === 3) {
    console.log("✅ Match was finalized! Winner:", escrowMatch.winner);
  } else if (arenaMatch.creatorFinishBlock.toString() !== "0" && arenaMatch.opponentFinishBlock.toString() !== "0") {
    console.log("⚠️  Both finished but escrow not finalized - there may be an error in finalize()");
  }
}

function getEscrowState(state) {
  const states = ["NONE", "OPEN", "ACCEPTED", "FINALIZED", "REFUNDED", "CANCELED"];
  return "(" + (states[state] || "UNKNOWN") + ")";
}

function getArenaState(state) {
  const states = ["NONE", "CREATED", "ACCEPTED", "IN_PROGRESS", "SUBMISSION_OPEN", "FINALIZED", "REFUNDED", "CANCELED"];
  return "(" + (states[state] || "UNKNOWN") + ")";
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
