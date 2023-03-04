const hre = require('hardhat')

const _initBaseURI='ipfs://QmRdY2b8nrvjZ9mM3qgQMLLAYjby6szQg9WX9PspcvBKHx/'

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
