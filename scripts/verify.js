require ('@nomiclabs/hardhat-etherscan')
const hre = require( 'hardhat')

const _initBaseURI='ipfs://QmRdY2b8nrvjZ9mM3qgQMLLAYjby6szQg9WX9PspcvBKHx/'


async function main() {

  await hre.run('verify:verify', {
    address: '0x62c62c019BffcdDeD59b601ed7a53479473C81eB',
    constructorArguments: [_initBaseURI]
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
