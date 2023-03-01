import {React, useState }from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
export default function Roadmap () {

  
return (

<>
<div className="flex flex-col items-center justify-start min-h-srceen w-screen font-LuckiestGuy text-white">
  <h1 className="text-[40px] text-center uppercase tracking-wide">Roadmap</h1>

  <div className='mt-6 flex flex-col items-center'>

    <div className="flex md:flex-row flex-col items-center justify-center mt-8">
      <img src="/skelees-arrival.png" className='w-[300px] h-[300px] md:mx-16 mx-4 hidden md:flex'/>
      <p className="mx-4 w-auto h-auto text-start md:text-[22px] text-[18px] md:mx-16 mx-4">
        <span className="uppercase text-[#3ae516] text-[40px]">THE ARRIVAL</span><br/><br/>
         <span className="uppercase md:hidden">Skelee’s have arrived from the underworld. A community of gamers and late-night friends will join together in an epic adventure to victory.</span>
        <span className="uppercase hidden md:flex">Skelee’s have arrived from the underworld.</span>
        <span className="uppercase hidden md:flex"> A community of gamers and late-night friends <br/> will join together in an epic adventure  <br/>to victory.</span>
      </p>
      <img src="/skelees-arrival.png" className='w-[300px] h-[300px] md:mx-16 mx-4 md:hidden'/>
    </div>

    <div className="flex md:flex-row flex-col items-center justify-center mt-8">
      <p className="mx-4 w-auto h-auto text-start md:text-[22px] text-[18px] md:mx-16 mx-4">
        <span className="uppercase text-[#3ae516] text-[40px]">THE League</span><br/>
        <span className="uppercase">q3 2023</span><br/><br/>
        <span>Holders will have access to join our</span><br/>
        <span>late-night gaming portal</span><br/>
        <span>to claim Skelee’s league pass!</span>
      </p>
      <img src="/skelees-leaguepass.png" className='w-[300px] h-[300px] md:mx-16 mx-4'/>
    </div>

    <div className="flex md:flex-row flex-col items-center justify-center mt-8">
      <img src="/roadmap-beta-championsleague.png" className='w-[300px] h-[300px] md:mx-16 mx-4 hidden md:flex'/>
      <p className="mx-4 w-auto h-auto text-start md:text-[22px] text-[18px] md:mx-16 mx-4">
        <span className="uppercase text-[#3ae516] text-[40px]">Champion beta league<br/></span>Q4 2023<br/><br/>
        <span>Skelee holders<br/>will beta-test and compete in the <br/>champions league portal system.</span><br/>
      </p>
      <img src="/roadmap-beta-championsleague.png" className='w-[300px] h-[300px] md:mx-16 mx-4 md:hidden'/>
    </div>

    <div className="flex md:flex-row flex-col items-center justify-center mt-8">
      <p className="mx-4 w-auto h-auto text-start md:text-[22px] text-[18px] md:mx-16 mx-4">
        <span className="uppercase text-[#3ae516] text-[40px]">Ar experience</span><br/>
        <span className="uppercase ">q1 2024</span><br/><br/>
        <span>Experience Skelee</span><br/>
        <span>in an augmented reality.</span><br/>
        <span>Holders must finish a quest to receive <span className='md:hidden'>an Augmented Reality Skelee Boot.</span></span><br/>
        <span className='hidden md:flex'>an Augmented Reality Skelee Boot NFT.</span>
      </p>
      <img src="/skelee-boot-ar.png" className='w-[300px] h-[300px] md:mx-16 mx-4'/>
    </div>

    <div className="flex md:flex-row flex-col items-center justify-center mt-8">
      <img src="/skelee-roadmap-champions-league.png" className='w-[300px] h-[300px] md:mx-16 mx-4 hidden md:flex'/>
      <p className="mx-4 w-auto h-auto text-start md:text-[22px] text-[18px] md:mx-16 mx-4">
        <span className="uppercase text-[#3ae516] text-[40px]">Champion league<br/></span>Q2 2024<br/><br/>
        <span>The 100 top Skelee holders 
        <br/>of the champions beta league
        <br/>will have a chance to compete for
        <br/>prize money and rewards.</span><br/>
      </p>
      <img src="/skelee-roadmap-champions-league.png" className='w-[300px] h-[300px] md:mx-16 mx-4 md:hidden'/>
    </div>

  </div>

  {/*<div className="w-full h-auto bg-gray-700 py-10 flex flex-col items-center justify-center mt-10">
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
  </div>*/}

  {/* <div className="w-full h-auto bg-gray-700 py-12 flex flex-col items-center justify-center">
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
  </div> */}

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
