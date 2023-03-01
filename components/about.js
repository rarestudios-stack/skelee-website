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
      Welcome to an immortal gamer’s paradise, AKA SKELEE. A non-fungible token, that brings
together a community of late-night gamers from all around the world. Skelee is a collection of 8,000 unique NFTs on the Ethereum blockchain. Inspired by late night gaming, Beeple, 3D art, and a friend that never gave up on us.<br/> <br/> We released Skelee from the underworld to show him the other side of life. Filled with gaming, friends, competitions and augmented reality experiences, Skelee has a lot to explore. This is just the beginning, Rare Studios New York is our laboratory and we are a species that are set to live amongst others in our own unique metaverse and world to come. Join us for the gaming, stay for the family we build.
</p>
</div>

<img src='/skelee-about-image.png' className='h-[300px] w-auto md:hidden'/>
        
      </div>
    </div>
    </>
  );
}
