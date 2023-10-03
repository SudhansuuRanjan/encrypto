import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI_URL || "",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY || ""],
    }
  }
};

export default config;