/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('hardhat-deploy');
require("hardhat-deploy-ethers");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan")
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// Your API key for Etherscan
// Obtain one at https://etherscan.io/
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
       url: API_URL,
       accounts: [`0x${PRIVATE_KEY}`]
    }
 },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    arguments: ['0x5e94B61BCa112683D18d5Ed27CebB16566E6d5ba', '0xbe02727047fADd7fe434E093e001745B42C5F49B', '0x7A81e50E0Ad45B31cC8E54A55095714F13a0c74e']
  }
};