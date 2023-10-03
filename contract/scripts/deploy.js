const { ethers } = require("hardhat");

const main = async () => {
  const _name = "FlipCoin";
  const _symbol = "FLP";
  const _initialSupply = 1_000_000_000; // Initial supply amount

  const flipCoin = await ethers.deployContract("FlipCoin", [_name, _symbol, _initialSupply]);
  const address = await flipCoin.getAddress();
  console.log(`FlipCoin contract deployed to: ${address}`);
  const user = await ethers.deployContract("User", [address]);
  const userAddress = await user.getAddress();
  console.log(`User contract deployed to: ${userAddress}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();