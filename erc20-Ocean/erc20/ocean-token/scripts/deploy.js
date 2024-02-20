const hre = require("hardhat");

async function main() {
  const RulanToken = await hre.ethers.getContractFactory("RulanToken");
  const rulanToken = await RulanToken.deploy(100000000, 50);

  await rulanToken.deployed();

  console.log("Rulan Token deployed: ", rulanToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
