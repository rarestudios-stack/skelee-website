const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
import { config } from '../dapp.config'
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('../scripts/whitelist.js')

const web3 = createAlchemyWeb3(process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL)
const contract = require('../artifacts/contracts/Skelee.sol/Skelee.json')
const nftContract = new web3.eth.Contract(contract.abi, config.contractAddress)


// Calculate merkle root from the whitelist array
const leafNodes = whitelist.map((addr) => keccak256(addr))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
const root = merkleTree.getRoot()


export const getTotalMinted = async () => {
  const totalMinted = await nftContract.methods.totalSupply().call()
  return totalMinted
}

export const getMaxSupply = async () => {
  const maxSupply = await nftContract.methods.maxSupply().call()
  return maxSupply
}

export const isPausedState = async () => {
  const paused = await nftContract.methods.paused().call()
  return paused
}

export const isSkeleeFriendsMint_Live = async () => {
  const publicSale = await nftContract.methods.SkeleeFriendsMint_Live().call()
  return publicSale
}

export const isEarlyAccess_Live = async () => {
  const publicSale = await nftContract.methods.EarlyAccessMint_Live().call()
  return publicSale
}

export const isPublicMint_Live = async () => {
  const publicSale = await nftContract.methods.PublicMint_Live().call()
  return publicSale
}


//Set up EarlyAccessMint

export const EarlyAccessMint = async (mintAmount) => {
  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: 'To be able to mint, you need to connect your wallet'
    }
  }
  const wallet =(window.ethereum.selectedAddress)
  const numberMinted = await nftContract.methods.numberMinted(wallet) .call()
  console.log('You have already minted : ' + numberMinted)
  console.log ('you are going to mint : ' + mintAmount)
  const AbleToMint = (config.maxMintAmount_EarlyAccess - numberMinted)

  if (AbleToMint <  mintAmount){
    return {
      success: false,
      status: '📌 Exceed max mint amount per wallet' 
    }
  }

  const nonce = await web3.eth.getTransactionCount(
    window.ethereum.selectedAddress,
    'latest'
  )

  

  // Set up our Ethereum transaction
  const tx = {
    to: config.contractAddress,
    from: window.ethereum.selectedAddress,
    value: parseInt(
      web3.utils.toWei(String(config.EarlyAccessMintPrice*mintAmount), 'ether')
    ).toString(16), // hex
    gas: String(25000 * mintAmount),
    data: nftContract.methods.EarlyAccessMint(mintAmount).encodeABI(),
    nonce: nonce.toString(16)
  }

  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx]
    })

    return {
      success: true,
      status: (
        <a href={`https://etherscan.io/tx/${txHash}`} target="_blank">
          <p>✅ Check out your transaction on Etherscan:</p>
          <p>{`https://etherscan.io/tx/${txHash}`}</p>
        </a>
      )
    }
  } catch (error) {
    return {
      success: false,
      status: '😞 Smth went wrong:' + error.message
    }
  }
}


//Set up PublicMint..................................................................................>

export const PublicMint = async (mintAmount) => {
  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: 'To be able to mint, you need to connect your wallet'
    }
  }
  const wallet =(window.ethereum.selectedAddress)
  const numberMinted = await nftContract.methods.numberMinted(wallet) .call()
  console.log('You have already minted : ' + numberMinted)
  console.log ('you are going to mint : ' + mintAmount)
  const AbleToMint = (config.maxMintAmount_PublicMint - numberMinted)

  if (AbleToMint <  mintAmount){
    return {
      success: false,
      status: '📌 You have already minted ' + numberMinted +' NFT/s ' +
       'You are able to mint only '+ AbleToMint +' more NFT/s ' 
    }
  }

  const nonce = await web3.eth.getTransactionCount(
    window.ethereum.selectedAddress,
    'latest'
  )

  

  // Set up our Ethereum transaction
  const tx = {
    to: config.contractAddress,
    from: window.ethereum.selectedAddress,
    value: parseInt(
      web3.utils.toWei(String(config.PublicMintPrice * mintAmount), 'ether')
    ).toString(16), // hex
    gas: String(25000 * mintAmount),
    data: nftContract.methods.PublicMint(mintAmount).encodeABI(),
    nonce: nonce.toString(16)
  }

  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx]
    })

    return {
      success: true,
      status: (
        <a href={`https://etherscan.io/tx/${txHash}`} target="_blank">
          <p>✅ Check out your transaction on Etherscan:</p>
          <p>{`https://etherscan.io/tx/${txHash}`}</p>
        </a>
      )
    }
  } catch (error) {
    return {
      success: false,
      status: '😞 Smth went wrong:' + error.message
    }
  }
}


//Set up SkeleeFriendsMint (White-listed free mint)------------------------------------------------------------------------------------>

export const SkeleeFriendsMint = async (mintAmount) => {
  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: 'To be able to mint, you need to connect your wallet'
    }
  }

  const leaf = keccak256(window.ethereum.selectedAddress)
  const proof = merkleTree.getHexProof(leaf)

  // Verify Merkle Proof
  const isValid = merkleTree.verify(proof, leaf, root)

  if (!isValid) { 
    return {
      success: false,
      status: '❌ Invalid Merkle Proof - You are not whitelisted'
    }
  }
  
  const wallet =(window.ethereum.selectedAddress)
  const numberMinted = await nftContract.methods.numberMinted(wallet) .call()
  const maxLimit = config.maxMintAmount_SkeleeFriendsMint
  const AbleToMint = (maxLimit - numberMinted)

  if (AbleToMint <  mintAmount){
    return {
      success: false,
      status: '📌 Exceeded max mint amount per wallet'  
    }
  }
  const nonce = await web3.eth.getTransactionCount(
    window.ethereum.selectedAddress,
    'latest'
  )

  // Set up our Ethereum transaction

  const tx = {
    to: config.contractAddress,
    from: window.ethereum.selectedAddress,
    gas: String(25000 * mintAmount),
    data: nftContract.methods
      .SkeleeFriendsMint(mintAmount, proof)
      .encodeABI(),
    nonce: nonce.toString(16)
  }

  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx]
    })

    return {
      success: true,
      status: (
        <a href={`https://etherscan.io/tx/${txHash}`} target="_blank">
          <p className='underline'>✅ Check out your transaction on Etherscan ✅</p>
        </a>
      )
    }
  } catch (error) {
    return {
      success: false,
      status: '😞 Smth went wrong:' + error.message
    }
  }
}
