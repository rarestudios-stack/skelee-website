import { useEffect, useState } from "react";
 
export default function Countdown(){

const calculateTimeLeft = () => {
    const difference = +new Date("2023-03-02T12:09:05+00:00") - +new Date();
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
      :(
      <h1 className='w-full h-full text-3xl text-center'>Minting is Live!</h1>
      )
      }
    </div>
     </>
    )
}
