const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const ArcadeEscrow = await ethers.getContractFactory(
    "contracts/ArcadeEscrow.sol:ArcadeEscrow"
  );
  const arcadeEscrow = await ArcadeEscrow.deploy();
  await arcadeEscrow.waitForDeployment();

  const arcadeEscrowAddress = await arcadeEscrow.getAddress();
  console.log("ArcadeEscrow deployed:", arcadeEscrowAddress);

  const SudokuArena = await ethers.getContractFactory(
    "contracts/SudokuArena.sol:SudokuArena"
  );
  const sudokuArena = await SudokuArena.deploy(arcadeEscrowAddress);
  await sudokuArena.waitForDeployment();

  const sudokuArenaAddress = await sudokuArena.getAddress();
  console.log("SudokuArena deployed:", sudokuArenaAddress);

  const refereeRole = await arcadeEscrow.REFEREE_ROLE();
  const grantTx = await arcadeEscrow.grantRole(refereeRole, sudokuArenaAddress);
  await grantTx.wait();

  const relayerAddress = process.env.RELAYER_ADDRESS;
  if (relayerAddress) {
    const relayerTx = await sudokuArena.setRelayer(relayerAddress);
    await relayerTx.wait();
    console.log("Relayer set:", relayerAddress);
  }

  console.log("Granted REFEREE_ROLE to SudokuArena.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
