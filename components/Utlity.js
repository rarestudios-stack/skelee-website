import { useState, Fragment } from "react";

 
export default function Utlity() {
 
  return (
    <>
    <div id='utlity'className='text-white w-full h-full flex flex-col items-center font-LuckiestGuy text-center'>
    <h1 className='md:text-[40px] text-[30px] font-LuckiestGuy text-white text-center uppercase tracking-wide mb-2'> Utility</h1>

    {/* first row */}
      <div className="flex md:flex-row flex-col items-center justify-center my-1">
        
        <div className="md:w-[500px] flex flex-col items-center justify-center md:p-6 p-2">
          <img src="/Skelee-arrival.gif" className="w-[250px] h-[250px] rounded-lg"/>
          <h1 className='my-1 uppercase text-[#3ae516] text-[25px]'>1 0F 1 ART PIECE</h1>
          <p className='text-sm p-1 md:w-auto w-srceen'>Each NFT has unique value and desirability.
            <br/> As it not only represents ownership of a unique digital
            <br/> assest but also reflects the artist who created it.
          </p>
        </div>
        <div className="md:w-[500px] flex flex-col items-center justify-center md:p-6 p-2">
          <img src="/immortal-championsleague.png" className="w-[250px] h-[250px] rounded-lg"/>
          <h1 className='my-1 uppercase text-[#3ae516] text-[25px]'>Gaming champions league</h1>
          <p className='text-sm p-1 md:w-auto w-srceen'>Skelee's gaming champion league for
            <br/>NFT holders is the ultimate battleground
            <br/> where skilled players complete for glory and
            <br/> valuble digital assets.
          </p>
        </div>
        
      </div>
      {/* second-row */}
       <div className="flex md:flex-row flex-col items-center justify-center">
        
        <div className="md:w-[500px] flex flex-col items-center justify-center md:p-6 p-2">
          <img src="/skelee-immortal-community.png" className="w-[250px] h-[250px] rounded-lg"/>
          <h1 className='my-1 uppercase text-[#3ae516] text-[25px]'>Immortal Community</h1>
          <p className='text-sm p-1 md:w-auto w-srceen'>Our immortal community is a lively
            <br/>and engaging space where late night gamers
            <br/>from around the world can connect, chat and share
            <br/>their passion for gaming.
          </p>
        </div>
        <div className="md:w-[500px] flex flex-col items-center justify-center md:p-6 p-2">
          <img src="/skelee-boot-utility-.png" className="w-[250px] h-[250px] rounded-lg"/>
          <h1 className='my-1 uppercase text-[#3ae516] text-[25px]'>Augmented Reality</h1>
          <p className='text-sm p-1 md:w-auto w-srceen'>Skelees augmented reality 'experience' will
            <br/>provide a fully impressive
            <br/>adventure that seamlessly blends
            <br/>the digital and physical world.
          </p>
        </div>
        
      </div>
    </div>
    </>
  );
}
