
import Image from 'next/image';
import {Link} from 'react-scroll/modules';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Base from '../components/base'
import Roadmap from '../components/roadmap'
import FAQ from '../components/FAQs'
import Utlity from '../components/Utlity'
import Footer from '../components/footer'

export default function Navtabs (){

  const [nav, setNav] = useState(false)


  const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) =>{
    setToggleState (index);
    setNav(!nav);
   }

  const handleNav = () => {
    setNav(!nav);
  };
  
    return (
      <div className="font-Kanit min-h-screen w-screen overflow-x-hidden overflowy-y-auto flex flex-col items-center justify-center">


        {toggleState === 1 ?(
          <>
          <img src='/skeleemobilebg.png'
          className='md:hidden flex object-cover w-screen h-full absolute -z-20'/>
          
                </>
               
                ) :

              toggleState === 2 ? (
                <>
                
                <img src='/skeleemobilemintpage- bg.png'
                className='md:hidden flex object-cover w-screen h-full absolute -z-20'/>
                </>
                
              ):

              toggleState === 3 ? (
                <>
                 
                <img src='/skeleeutlitybgmobile.png'
                className='md:hidden flex object-cover w-screen h-full absolute -z-20'/>
                </>
               
              ):

               (<></>)
              }
        
  
        <div className="relative flex flex-col items-center w-full h-screen">
        
  
        <div className='flex flex-col items-center justify-between w-full h-auto'>
        
          {/*Mobile Nav bar */}
          <div className='md:hidden h-[60px] w-screen filter backdrop-blur-md flex flex-row items-center justify-between px-4 z-10'>

<img src='/logo.png'
className='w-auto h-[30px] cursor-pointer'
onClick={() => toggleTab(1)}/>


  <div onClick={handleNav}
    className='flex md:hidden rounded-md cursor-pointer' >
    <AiOutlineMenu size={18} />
  </div>

  {/* overlay */}
    <div className={
    nav? ' md:hidden z-50 font-Kanit fixed left-0 top-0 w-full h-full backdrop-filter backdrop-blur-sm' : "hidden left-[-100%]"
      }>
    
    {/* Side Drawer Menu */}
  <div className ={
    nav? "fixed left-0 top-0 w-[100%] h-screen bg-white py-6 px-6 ease-in duration-500"
    :'fixed left-[-100%] top-0 py-10 px-6 ease-in duration-500 h-screen'
    }>

    <div className='flex w-full items-center justify-between'>
        <img src='/logo.png'
        className='w-auto h-[30px] cursor-pointer'
        onClick={() => toggleTab(1)}/>
        <div onClick={handleNav}
        className='rounded-full hover:shadow-lg hover:shadow-gray-600 p-3 cursor-pointer '>
          <AiOutlineClose size={18} />
        </div>
    </div>
    <div className='flex flex-col items-start text-start mt-4'>
      <div className='w-full uppercase py-2 border-b-2 border-black tracking-wider font-semibold text-[18px] hover:text-blue-500' onClick={() => toggleTab(2)}>
      MINT</div>
      <div className='w-full uppercase py-2 border-b-2 border-black tracking-wider font-semibold text-[18px]' onClick={() => toggleTab(6)}>
      About</div>              
      <div className='w-full uppercase py-2 border-b-2 border-black tracking-wider font-semibold text-[18px]' onClick={() => toggleTab(3)}>
      Utlity</div>
      <div className='w-full uppercase py-2 border-b-2 border-black tracking-wider font-semibold text-[18px]' onClick={() => toggleTab(4)}>
      Map</div>
      <div className='w-full uppercase py-2 border-b-2 border-black tracking-wider font-semibold text-[18px]' onClick={() => toggleTab(5)}>
      FAQ</div>
      <div className='w-full uppercase py-2 border-b-2 border-black tracking-wider font-semibold text-[18px]'>
      Twitter</div>
      <div className='w-full uppercase py-2 border-b-2 border-black tracking-wider font-semibold text-[18px]'>
      Discord</div>
      <div className='w-full uppercase py-2 border-b-2 border-black tracking-wider font-semibold text-[18px]'>
      Instagram</div>
      <div className='w-full uppercase py-2 border-b-2 border-black tracking-wider font-semibold text-[18px]'>
      Reddit</div>
      <div className='w-full uppercase py-2 border-b-2 border-black tracking-wider font-semibold text-[18px]'>
      Rare studios new york</div>
    </div>
  
  </div>
  </div>
    </div>

{/* mobile nav */}


    {/* Contents */}
              
    {toggleState === 1 ? (

<div className='absolute w-full top-[90px] flex flex-col items-center '>
<div className='h-screen'>
  <h1 className='text-[18px] tracking-wide text-center'>
    Welcome<br/>
    to the world of Skelee,a community of <br/>
    immortal gamers
  </h1>
  </div>
  <div className='w-full bg-black h-auto'>
  <Footer/>
  </div>
</div>


) :
// Mint section
toggleState === 2 ? (
  
  <>
  <div className='absolute w-full top-[90px] h-screen'>
  <div className='font-Kanit text-white h-screen w-screen flex flex-col items-center justify-start lg:px-20 px-6 relative'>

<h1 className='font-Kanit font-extrabold tracking-widest uppercase text-5xl text-center mt-6'>MINT</h1>
<h1 className='tracking-wide uppercase text-xl text-center'>Early access</h1>

{/* minting engine */}
<div className='w-[800px] flex flex-row items-center justify-between mt-4 filter backdrop-blur-md p-4 border border-white'>
<div>
<img src='/nft.gif'
className='w-[400px] h-auto'/>
</div>

<div className='flex flex-col items-center justify-start w-full px-6 py-3'>
<div className='flex justify-between w-full'>
<h1 className='text-lg text-center uppercase'>New friends mint <br/> 02/24 11.00 - 22.30</h1>
<h1 className='text-lg text-center uppercase'>early access mint <br/> 02/24 11.00 - 22.30</h1>
</div>

{/* countdown */}
<div className='flex w-full justify-between font-medium mt-4 px-8'>
<h1 className='text-xl text-center'>02 <br/>HRS</h1>
<h1 className='text-xl text-center'>52 <br/>MINS</h1>
<h1 className='text-xl text-center'>02 <br/>SECS</h1>
</div>

<div className='flex justify-between w-full font-medium mt-4 px-4'>
<h1 className='text-lg text-center'>Mint Price<br/>.25 ETH</h1>
<h1 className='text-lg text-center'>Total Supply<br/>8,000</h1>
<h1 className='text-lg text-center'>Reveal Time<br/>FEB 2023</h1>

</div>

<button className='px-16 py-3 bg-black rounded-lg mt-6 hover:bg-white hover:text-black'>Connect Wallet</button>

</div>
</div>

</div>
<div className='w-screen bg-black h-auto'>
  <Footer/>
  </div>
</div>

</>


) :

toggleState === 3 ? (

<>
<div className='absolute w-full top-[90px] min-h-screen '>
<div className='min-h-screen'>
  <Utlity/>
  </div>
  <div className='w-screen bg-black h-auto'>
  <Footer/>
  </div>
</div>

</>

) :

toggleState === 4 ? (
<>
  <div className='absolute w-full top-[100px] min-h-screen'>
  <div className='min-h-screen'>
  <Roadmap/>
  </div>
  <Footer/>
</div>

</>

) :


toggleState === 5 ? (
<>
<div className='absolute w-full top-[90px] min-h-screen'>
<div className='min-h-screen'>
  <FAQ/>
  </div>
  <Footer/>
</div>

</>

) :
toggleState === 6 ? (
<>
<div className='absolute w-full top-[90px] h-screen'>
<div className='h-screen'>
</div>
<Footer/>
</div>

</>
) :
(
 <></>
)
}

        </div>
  
        {/* content was */}

              
  
        </div>
  
      </div>
    ) 
}
