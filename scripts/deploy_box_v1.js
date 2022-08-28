const { ethers, upgrades } = require('hardhat')

async function main() {
  const Box = await ethers.getContractFactory('Box')

  const box = await upgrades.deployProxy(Box, [42], {
    initializer: 'initialize'
  })

  await box.deployed()

  console.log('Box deployed to:', box.address)
}

main()

// env $(cat .env) npx hardhat run --network rinkeby scripts/deploy_box_v1.js

// env $(cat .env) npx hardhat verify --network rinkeby 0x...0

// etherscan: code - more options - proxy - verify - save
