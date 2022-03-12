// Deploy to polygon mumbai testnet
// npx hardhat run scripts/deploy.js --network mumbai

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.10",
  networks: {
		mumbai: {
      url: process.env.ALCHEMY_MUMBAI_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY],
		}
  }
};
