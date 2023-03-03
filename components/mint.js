import Head from 'next/head';
import { useState,useEffect } from "react"
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import {
  getTotalMinted,
  getMaxSupply,
  isPausedState,
  isFreeMint_Live,
  isEarlyAccess_Live,
  FreeMint, 
  EarlyAccessMint         } from '../ulits/interact'

import Countdown from "../components/countdown"
  


export default function Mint(){

  
    
    //end countdown widget
    
  const [maxSupply, setMaxSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)
  const [maxMintAmount, setMaxMintAmount] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isEarlyAccessState, setIsEarlyAccessState] = useState(false)
  const [isFreeMintState, setIsFreeMintState] = useState(false)
  

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    const init = async () => {
      setMaxSupply(await getMaxSupply())
      setTotalMinted(await getTotalMinted())
      

      setPaused(await isPausedState())
      setIsFreeMintState(await isFreeMint_Live() && totalMinted < 10)  // change when mainnet
      setIsEarlyAccessState(await isEarlyAccess_Live())
      

      setMaxMintAmount(
        isEarlyAccessState ? config.maxMintAmount_EarlyAccess: config.maxMintAmount_FreeMint
      )
      
      
    }

    init()
  }, [])
  
  useEffect( () => {
    const onboardData = initOnboard( {
      address: (address) => setWalletAddress(address ? address : ''),
      wallet: (wallet) => {
        if (wallet.provider) {
          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          window.localStorage.removeItem('selectedWallet') }}
    }
    )
  setOnboard(onboardData)
  }, [])

  const previouslySelectedWallet = typeof window !== 'undefined' &&
  window.localStorage.getItem('selectedWallet')

useEffect(() => {
  if (previouslySelectedWallet !== null && onboard) {
    onboard.walletSelect(previouslySelectedWallet)
  }
}, [onboard, previouslySelectedWallet])

  const connectWalletHandler = async () => {
  
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
    }
  }
  const incrementMintAmount = () => {
    if (mintAmount < maxMintAmount) {
      setMintAmount(mintAmount + 1)
    }
  }

  const decrementMintAmount = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1)
    }
  }


  const EarlyAccessMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await EarlyAccessMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }

  const FreeMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await FreeMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }
  return (
    <div className='font-Kanit text-white min-h-screen w-screen flex flex-col items-center justify-start lg:px-20 px-6 relative'>

<h1 className='font-LuckiestGuy font-extrabold tracking-widest uppercase text-5xl text-center mt-6'>MINT</h1>
<h1 className='tracking-wide uppercase text-xl text-center font-LuckiestGuy'>Now Open</h1>

{/* minting engine */}
<div className='md:w-[800px] w-auto h-full flex md:flex-row flex-col items-center justify-between mt-4 filter md:backdrop-blur-md p-4 border border-white'>
<div>
<img src='/nft.gif'
className='w-[400px] h-auto'/>
</div>

<div className='flex flex-col items-center justify-start w-full md:px-6 px-2 py-3 filter backdrop-blur-md'>
<div className='md:flex justify-between w-full items-center'>
<h1 className='text-lg text-center uppercase md:mt-0 mt-4 font-LuckiestGuy'>New friends mint <br/> 02/24 11.00 - 22.30</h1>
<h1 className='text-lg text-center uppercase md:mt-0 mt-4 font-LuckiestGuy'>early access mint <br/> 02/24 11.00 - 22.30</h1>
</div>

{/* countdown */}
<div className='flex w-full justify-center font-medium mt-4 px-6'>

<Countdown/>

</div>

<div className='flex justify-between w-full font-medium mt-4 md:px-4'>
<h1 className='md:text-lg text-center'>Mint Price<br/>.125 ETH</h1>
<h1 className='md:text-lg text-center'>Total Supply<br/>8,000</h1>
<h1 className='md:text-lg text-center'>Reveal Time<br/>FEB 2023</h1>

</div>
{/* mobile section */}

{/* <div className='flex justify-between w-full font-medium mt-4 px-4'>
<h1 className='text-lg text-center'>Mint Price<br/>.25 ETH</h1>
<h1 className='text-lg text-center'>Total Supply<br/>8,000</h1>
<h1 className='text-lg text-center'>Reveal Time<br/>FEB 2023</h1>

</div> */}

{!walletAddress?
(
<button className='md:px-16 px-6 py-3 bg-black rounded-lg mt-6 hover:bg-white hover:text-black'
onClick={connectWalletHandler}>Connect Wallet</button>
):(
<>
            <div className="font-Kanit flex items-center justify-center w-full mt-5">
                  <button
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-black font-bold rounded-full p-2"
                    onClick={decrementMintAmount}
                    >
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p className="font-LuckiestGuy flex items-center justify-center text-center font-bold text-white text-2xl md:text-3xl p-2 mx-10">
                  {mintAmount}  
                  </p>
                  <button
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-black font-bold rounded-full"
                    onClick={incrementMintAmount} 
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffffff"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button> 
                  <button className='px-10 py-3 bg-black rounded-lg hover:bg-white hover:text-black ml-16'
onClick={isEarlyAccessState ? FreeMintHandler : EarlyAccessMintHandler}>Mint</button>
                </div>
                </>
                
                
            )    
           } 
           
           <div className="font-Kanit max-w-screen-sm mt-4">
              {status && (
              <div
                className={`border ${
                  status.success ? 'border-green-500 text-white' : 'border-red-600 text-white'
                } rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-5"`}
              >
                <p className="flex flex-col w-auto">
                  {status.message}
                </p>
              </div>
            )}
            </div> 
</div>    

</div>



</div>

  )
}

