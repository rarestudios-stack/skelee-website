import {React, useState }from "react";
export default function Roadmap () {

  
return (

<>
<div className="flex flex-col mt-10 items-center justify-start min-h-srceen w-screen font-Gotham">
  <h1 className="font-extrabold text-4xl text-center uppercase tracking-wide">Roadmap</h1>

  <div className='mt-6 flex flex-col items-center'>

    <div className="flex flex-row items-start justify-center mt-8">
      <img src="/1.jpg" className='w-[300px] h-[300px] mx-16'/>
      <p className="mx-4 w-auto h-auto text-start text-[22px]">
        <span className="uppercase font-bold">THE ARRIVAL</span><br/><br/>
        <span className="uppercase">Skelees have arrived</span><br/>
        <span className="uppercase font-semibold">Sold out collection</span><br/>
        <span>Countdown to gaming portals</span><br/>
      </p>
    </div>

    <div className="flex flex-row items-start justify-center mt-8">
      <p className="mx-4 w-auto h-auto text-start text-[22px]">
        <span className="uppercase font-bold">THE League</span><br/>
        <span className="uppercase font-bold">q3 2023</span><br/><br/>
        <span>Open access for</span><br/>
        <span>late night gaming portal</span><br/>
        <span>will begin</span>
      </p>
      <img src="/1.jpg" className='w-[300px] h-[300px] mx-16'/>
    </div>

    <div className="flex flex-row items-start justify-center mt-8">
      <img src="/1.jpg" className='w-[300px] h-[300px] mx-16'/>
      <p className="mx-4 w-auto h-auto text-start text-[22px]">
        <span className="uppercase font-bold">Champion beta league<br/>q4 2023</span><br/><br/>
        <span>The top gamers of Skelees will <br/>battle it out for 1 weekend <br/>to see who will have the
          highest <br/>stats o win 10 eth</span><br/>
      </p>
    </div>

    <div className="flex flex-row items-start justify-center mt-8">
      <p className="mx-4 w-auto h-auto text-start text-[22px]">
        <span className="uppercase font-bold">Ar experience</span><br/>
        <span className="uppercase font-bold">q1 2024</span><br/><br/>
        <span>Experience Skelee</span><br/>
        <span> in AR immersive</span><br/>
        <span>experience and Release</span><br/>
        <span>of Skelee Boot for mobile game</span>
      </p>
      <img src="/1.jpg" className='w-[300px] h-[300px] mx-16'/>
    </div>

    <div className="flex flex-row items-start justify-center mt-8">
      <img src="/1.jpg" className='w-[300px] h-[300px] mx-16'/>
      <p className="mx-4 w-auto h-auto text-start text-[22px]">
        <span className="uppercase font-bold">Champion league<br/>q2 2024</span><br/><br/>
        <span>The top gamers of Skelees will <br/>battle it out for 1 weekend <br/>to see who will have the
          highest <br/>stats to win 10 eth</span><br/>
      </p>
    </div>

  </div>

  <div className="w-full h-auto bg-gray-700 py-10 flex flex-col items-center justify-center mt-10">
    <p className="text-white text-center text-[20px] font-medium uppercase">Buy A skelee to join the family <br/>of late night gamers</p>
    <button className="mt-6 py-4 px-12 rounded-full text-center font-extrabold tracking-wider bg-gray-400 text-white text-[22px]">MINT</button>
  </div>

  <div className="w-full h-auto bg-gray-900 py-10 flex flex-col items-center justify-center">
  <p className="text-white text-[18px] font-medium text-center">SKELEE'S are priced at a flat rate of 0.25 ETH.
            <br/>
            Skelees on the ERC721A, so it is easier for holders o purchase more than 1 NFT.
            <br/>
            Each Skelee grants holders access to our
            <br/>
            Gaming Champion League
        </p>
  </div>

  <div className="w-full h-auto bg-gray-700 py-12 flex flex-col items-center justify-center">
    <p className="text-white text-center text-[30px] font-bold tracking-wider uppercase">Join the community</p>
    
    <div className="flex flex-row items-center justify-center mt-6">
      
      <div className="mx-6 py-4 px-12 rounded-xl text-center tracking-wider bg-gray-400 text-white text-[20px]">
      <span className='uppercase text-[22px] font-semibold'>twitter</span><br/>
      Follow Skelee for Updates and News
      </div>

      <div className="mx-6 py-4 px-12 rounded-xl text-center tracking-wider bg-gray-400 text-white text-[20px]">
      <span className='uppercase text-[22px] font-semibold'>Discord</span><br/>
      Chat in realtime with Skelee Friends
      </div>
    
    </div>
  </div>

  {/* <div className='w-full absolute  h-auto bg-gray-700 flex flex-col items-center justify-center mt-10 py-6'>
      <h1 className="text-white text-center text-[20px] font-medium uppercase">Buy A skelee to join the family</h1>
      <h1 className="text-white text-center text-[20px] font-medium uppercase mt-0">of late night gamers</h1>
      <button className='text-center py-2 px-12 tracking-widest uppercase bg-[#c0c0c0] font-bold rounded-full text-[25px] mt-6'>MINT</button>

      <div className="w-full bg-gray-900 flex flex-col items-center justify-center py-6 mt-8">
        <p className="text-white text-lg font-medium text-center">SKELEE'S are priced at a flat rate of 0.25 ETH.
            <br/>
            Skelees on the ERC721A, so it is easier for holders o purchase more than 1 NFT.
            <br/>
            Each Skelee grants holders access to our
            <br/>
            Gaming Champion League
        </p>
      </div>

      <h1 className="text-center text-2xl tracking-widest text-white uppercase mt-8">Join the community</h1>

      <div className="flex items-center mt-8">

        <div className="flex flex-col items-center bg-gray-600 rounded-lg px-4 py-2 mx-4">
            <h1 className="text-center tracking-wider uppercase text-white font-semibold">twitter</h1>
            <h1 className="text-center uppercase text-white">Follow Skelees for Updates and News</h1>
        </div>

        <div className="flex flex-col items-center bg-gray-600 rounded-lg px-4 py-2 mx-4">
            <h1 className="text-center tracking-wider uppercase text-white font-semibold">Discord</h1>
            <h1 className="text-center uppercase text-white">Chat in realtime with Skelee Friends</h1>
        </div>

      </div>
    </div> */}
</div>
</>



    )
}