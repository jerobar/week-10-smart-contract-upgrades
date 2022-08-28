const { ethers, upgrades } = require('hardhat')

/**
 * Deploys `BreakfastCoinUpgradeable` contract.
 */
async function main() {
  const BreakfastCoinUpgradeable = await ethers.getContractFactory(
    'BreakfastCoinUpgradeable'
  )
  const breakfastCoinUpgradeableProxy = await upgrades.deployProxy(
    BreakfastCoinUpgradeable,
    [],
    {
      initializer: 'initialize'
    }
  )

  await breakfastCoinUpgradeableProxy.deployed()

  console.log(
    'BreakfastCoinUpgradeable deployed to:',
    breakfastCoinUpgradeableProxy.address
  )
  // 0xc858c8De0fA8ddBde4906C3E57AE45c02c40ffA8
}

main()

// env $(cat .env) npx hardhat run --network rinkeby scripts/deploy_box_v1.js

// env $(cat .env) npx hardhat verify --network rinkeby 0x...0

// etherscan: code - more options - proxy - verify - save
