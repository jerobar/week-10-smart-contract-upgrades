const { ethers } = require('hardhat')

/**
 * Deploys `BreakfastCoinStaking` contract.
 */
async function main() {
  const BreakfastCoinStaking = await ethers.getContractFactory(
    'BreakfastCoinStaking'
  )
  const breakfastCoin = await BreakfastCoinStaking.deploy()

  await breakfastCoin.deployed()

  console.log('BreakfastCoinStaking deployed to:', breakfastCoin.address)
  //
}

main()

// env $(cat .env) npx hardhat run --network rinkeby scripts/deploy_box_v1.js

// env $(cat .env) npx hardhat verify --network rinkeby 0x...0

// etherscan: code - more options - proxy - verify - save
