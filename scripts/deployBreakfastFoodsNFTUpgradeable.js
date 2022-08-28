const { ethers, upgrades } = require('hardhat')

/**
 * Deploys `BreakfastFoodsNFTUpgradeable` contract.
 */
async function main() {
  const BreakfastFoodsNFTUpgradeable = await ethers.getContractFactory(
    'BreakfastFoodsNFTUpgradeable'
  )
  const breakfastFoodsNFTUpgradeable = await upgrades.deployProxy(
    BreakfastFoodsNFTUpgradeable,
    [],
    {
      initializer: 'initialize'
    }
  )

  await breakfastFoodsNFTUpgradeable.deployed()

  console.log(
    'BreakfastFoodsNFTUpgradeable deployed to:',
    breakfastFoodsNFTUpgradeable.address
  )
  // 0xEBDFc9633CB6F06c875bc530d6D8C70916520DEA
}

main()

// env $(cat .env) npx hardhat run --network rinkeby scripts/deploy_box_v1.js

// env $(cat .env) npx hardhat verify --network rinkeby 0x...0

// etherscan: code - more options - proxy - verify - save
