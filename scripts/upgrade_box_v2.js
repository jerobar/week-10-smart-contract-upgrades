const { ethers, upgrades } = require('hardhat')

const PROXY = '0x...0'

async function main() {
  const BoxV2 = await ethers.getContractFactory('BoxV2')

  await upgrades.upgradeProxy(PROXY, BoxV2)

  console.log('Box upgraded')
}

main()
