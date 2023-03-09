import { useEffect, useState } from "react";
import {
  getTotalMinted,
  getMaxSupply,
  isPausedState,
  isSkeleeFriendsMint_Live,
  isEarlyAccess_Live,
  isPublicMint_Live,
  PublicMint, 
  SkeleeFriendsMint,
  EarlyAccessMint         } from '../ulits/interact'
 
export default function Countdown(){

  const [paused, setPaused] = useState(false)
  const [isEarlyAccessState, setIsEarlyAccessState] = useState(false)
  const [isSkeleeFriendsState, setIsSkeleeFriendsState] = useState(false)
  const [isPublicMintState , setIsPublicMintState] = useState (false)

  useEffect(() => {
    const init = async () => {
      

      setPaused(await isPausedState())
      setIsSkeleeFriendsState(await isSkeleeFriendsMint_Live())
      setIsEarlyAccessState(await isEarlyAccess_Live())
      setIsPublicMintState(await isPublicMint_Live())
      
      
    }

    init()
  }, [])

const calculateTimeLeft = () => {
    const difference = +new Date("2023-03-11T20:00:00+08:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
	
        return(
     <>
     <div className="font-LuckiestGuy text-white w-full h-full text-center">
     {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ?
      (<div className="w-full h-full text-3xl text-center flex justify-center">
        <span className='mx-3'>{timeLeft.hours}<br/>Hrs</span>

        <span className='mx-3'>{timeLeft.minutes}<br/>Mins</span>

        <span className='mx-3'>{timeLeft.seconds}<br/>Secs</span>
      </div>)
      :paused?(
        
      <h1 className='w-full h-full text-3xl text-center'>Will be Live soon!</h1>
      )
      : isSkeleeFriendsState ? (
        <h1 className='w-full h-full text-3xl text-center'>Skelee Friends Mint</h1>
      ) : 
      isEarlyAccessState? (
        
      <h1 className='w-full h-full text-3xl text-center'>Early Access Mint</h1>
      ) 
      : (
        <h1 className='w-full h-full text-3xl text-center'>Public Mint</h1>
      ) 
      }
    </div>
     </>
    )
}
