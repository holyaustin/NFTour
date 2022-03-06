const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed();
  console.log("nftMarketplace deployed to:", nftMarketplace.address);

   // Grab the MyNFT contract factory 
   const MyNFT = await ethers.getContractFactory("MyNFT");
   const myNFT = await MyNFT.deploy(); // Instance of the contract 
   console.log("MyNFT Contract deployed to address:", myNFT.address);



  fs.writeFileSync('./config.js', `
  export const marketplaceAddress = "${nftMarketplace.address}"
  export const myNFT = "${myNFT.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
