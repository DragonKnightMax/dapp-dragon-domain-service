# Domain Name Service

## Table of Contents

## Technologies Used

- Hardhat
- Polygonscan Mumbai
- Polygon (Mumbai Testnet)
- Alchemy

## Notes

1. Create an account on Metamask if you do't have one.
2. Go to [Polygonscan Mumbai](https://mumbai.polygonscan.com/).
3. Click 'Add Mumbai Network' to add it to your Metamask wallet.
4. Get some fake MATIC tokens on [Polygon’s faucet system](https://faucet.polygon.technology/) to deploy contract.
5. Create a new app on Alchemy.
  
## Deploy

- Locally

```shell
npx hardhat scripts/run.js
```

- Polygon Mumbai Testnet

```shell
npx hardhat run scripts/deploy.js --network mumbai
```

  - Copy the contract address after deploying to Mumbai Testnet.  
    - For my case, it is `0x62D45AA40C4DbBB3AE7D79A6D8cBD80C3722a274`.
  - Verify the contract deployment on [Mumbai Polygonscan](https://mumbai.polygonscan.com/).
  - Check the domain minted as NFT on [OpenSea's Testnet](https://testnets.opensea.io/).
