import { useState, Fragment } from "react";

 
export default function About() {
 
  return (
    <>
    <div id='utlity'className='text-white w-screen h-full flex flex-col items-center font-Kanit text-center'>
	<h1 className='md:text-[40px] text-[30px] font-LuckiestGuy text-white text-center uppercase tracking-wide mb-2'> About</h1>

      <div className="flex md:flex-row flex-col items-center justify-center w-full my-4 md:px-[100px] px-4">
      
      <img src='/skelee-about-image.png' className='h-[500px] w-auto hidden md:flex mx-8'/>
      
      <div className='flex flex-col items-center w-auto mx-8'>  
      
      <img src='/Skelee-logo.png' className='h-[50px] w-auto mb-6'/>
      
      <p className="text-center font-light text-lg md:w-[600px]">
      Welcome to an immortal gamer’s paradise. Skelee is a non-fungible token, that brings together a community of late-night gamers from all around the world. Skelee is a collection of 7777 unique NFTs on the Ethereum blockchain.<br/> <br/>

      We released Skelee from the underworld to show him the other side of life. A life filled with gaming, friends, competitions, and augmented reality experiences. Skelee was created by 2 brothers, a small group of web3 developers, industry professionals, game enthusiasts, and a profound 3D artist. Join us for the gaming, and stay for the family we build.
</p>
</div>

<img src='/skelee-about-image.png' className='h-[300px] w-auto md:hidden'/>
        
      </div>
    </div>
    </>
  );
}
