
import Image from 'next/image';
import {Link} from 'react-scroll/modules';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar (){

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  
    return (
            <>
            <div className='filter drop-shadow-md w-screen h-auto font-Gotham '>
              <div className='flex flex-col items-center w-full'>

                <div className='w-full bg-gray-900 py-4'>
                  <h1 className='text-center font-semibold uppercase text-white tracking-wide'>Mint is Live</h1>
                </div>

                <div className='flex flex-row w-full h-[60px] lg:px-16 '>
                  <div className='w-[40%] flex items-center p-4 justify-center'>
                    <h1 className='text-center font-bold mx-10'>Home</h1>
                    <h1 className='text-center font-bold mx-10'>Roadmap</h1>
                  </div>

                  <div className='w-[20%] flex items-center p-4 justify-center'>
                    <h1 className='text-center font-bold mx-10 text-xl'>Skelee Logo</h1>
                  </div>

                  <div className='w-[40%] flex items-center p-4 justify-center'>
                    <h1 className='text-center font-bold mx-10'>Team</h1>
                    <h1 className='text-center font-bold mx-10'>FAQ</h1>
                    <button className='text-center py-2 px-10 tracking-widest uppercase bg-gray-500 text-white font-bold rounded-full mx-10'>MINT</button>
                  </div>

                </div>

              </div>
            </div>
            </>

            
    
        
    ) 
}