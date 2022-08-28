const { ethers, upgrades } = require('hardhat')

/**
 * Deploys `BreakfastFoodsNFTStakingUpgradeable` contract.
 */
async function main() {
  const BreakfastFoodsNFTStakingUpgradeable = await ethers.getContractFactory(
    'BreakfastFoodsNFTStakingUpgradeable'
  )
  const breakfastFoodsNFTStakingUpgradeableProxy = await upgrades.deployProxy(
    BreakfastFoodsNFTStakingUpgradeable,
    ['0x9127932257fE818F9144f13F37c7177f4eEC7f90'],
    {
      initializer: 'initialize'
    }
  )

  await breakfastFoodsNFTStakingUpgradeableProxy.deployed()

  console.log(
    'BreakfastFoodsNFTStakingUpgradeable deployed to:',
    breakfastFoodsNFTStakingUpgradeableProxy.address
  )
  // 0x36B55b653aEb928Aed8C33C099f9f3294cfa1c02
}

main()

// env $(cat .env) npx hardhat run --network rinkeby scripts/deploy_box_v1.js

// env $(cat .env) npx hardhat verify --network rinkeby 0x...0

// etherscan: code - more options - proxy - verify - save
