const hre = require('hardhat')

const _initBaseURI='ipfs://bafybeiekw4svr3jn2romogzecdmx4xz2khz3vfih3eaxfrvsjbkmknod6u/'

async function main() {

  // Deploy the contract
  const skelee = await hre.ethers.getContractFactory('Skelee')
  const Skelee = await skelee.deploy(
    _initBaseURI)
  await Skelee.deployed()

  console.log('Skelee deployed to:', Skelee.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
