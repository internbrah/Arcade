const { ethers } = require("hardhat");

async function main() {
  const ESCROW_ADDRESS = "0xF9eE097e44C12Ba9B2a21453a7F0a044992D64b1";
  const ARENA_ADDRESS = "0xFa517518Ca320BC6304485f32471CC362F95E408";
  
  // REFEREE_ROLE = keccak256("REFEREE_ROLE")
  const REFEREE_ROLE = ethers.keccak256(ethers.toUtf8Bytes("REFEREE_ROLE"));
  
  console.log("Granting REFEREE_ROLE to SudokuArena...");
  console.log("Escrow:", ESCROW_ADDRESS);
  console.log("Arena:", ARENA_ADDRESS);
  console.log("Role:", REFEREE_ROLE);
  
  // Use ABI directly instead of artifact
  const abi = [
    "function grantRole(bytes32 role, address account) external",
    "function hasRole(bytes32 role, address account) external view returns (bool)"
  ];
  
  const [signer] = await ethers.getSigners();
  const escrow = new ethers.Contract(ESCROW_ADDRESS, abi, signer);
  
  // Check if already has role
  const hasRole = await escrow.hasRole(REFEREE_ROLE, ARENA_ADDRESS);
  if (hasRole) {
    console.log("SudokuArena already has REFEREE_ROLE!");
    return;
  }
  
  const tx = await escrow.grantRole(REFEREE_ROLE, ARENA_ADDRESS);
  console.log("Transaction sent:", tx.hash);
  
  await tx.wait();
  console.log("Done! SudokuArena can now finalize matches.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
