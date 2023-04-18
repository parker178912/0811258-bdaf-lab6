# 0811258-bdaf-lab6
## Deploy

add `.env` file : 

```bash
API_URL = "https://eth-goerli.g.alchemy.com/v2/YOUR_API_URL "
PRIVATE_KEY = "YOUR_PRIVATE_KEY"
ETHERSCAN_API_KEY = "YOUR_ETHERSCAN_API_KEY"
```

fill in `hardhat.config.js` :

```solidity
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
```

deploy : 

```solidity
npx hardhat run scripts/deploy.js --network goerli
```

Check the contracts on [goerli etherscan](https://goerli.etherscan.io/), and you can see that the contract aren’t verified yet.

## Verify

```bash
npx hardhat verify --network goerli <contract-address> <arg1> <arg2> <arg3>
npx hardhat verify --network goerli 0xEE6317717B853a6740f8F3942a538615Aaf94Fc7 0x7A81e50E0Ad45B31cC8E54A55095714F13a0c74e 0xbe02727047fADd7fe434E093e001745B42C5F49B 0x5e94B61BCa112683D18d5Ed27CebB16566E6d5ba 
```

You can see that the contract is verified !!

## Process

step 1. call getwealthNFT.attack()

step 2. check NFT id from transaction 

step 3. call getwealthNFT.transferNFT().

step 4. check the NFT owner whether is your account or not.
