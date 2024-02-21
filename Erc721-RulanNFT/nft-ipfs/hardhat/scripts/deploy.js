const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5";

 const RulanContract = await hre.ethers.deployContract("Rulan", [
   metadataURL
 ]);

  await RulanContract.waitForDeployment();

  console.log("Rulan Contract Address:", RulanContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });