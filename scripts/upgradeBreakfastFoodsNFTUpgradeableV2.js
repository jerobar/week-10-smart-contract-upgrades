const { ethers, upgrades } = require('hardhat')

const PROXY_CONTRACT_ADDRESS = '0xEBDFc9633CB6F06c875bc530d6D8C70916520DEA'

async function main() {
  const BreakfastFoodsNFTUpgradeableV2 = await ethers.getContractFactory(
    'BreakfastFoodsNFTUpgradeableV2'
  )

  await upgrades.upgradeProxy(
    PROXY_CONTRACT_ADDRESS,
    BreakfastFoodsNFTUpgradeableV2
  )

  console.log('BreakfastFoodsNFTUpgradeableV2 upgraded')
}

main()
