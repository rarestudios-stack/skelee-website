
import Image from 'next/image';
import {Link} from 'react-scroll/modules';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Base from '../components/base'
import Roadmap from '../components/roadmap'
import FAQ from '../components/FAQs'
import Utlity from '../components/Utlity'
import Footer from '../components/footer'
import Aos from 'aos';
import "aos/dist/aos.css";
import Mint from '../components/mint'
import About from '../components/about'

export default function Navtabs (){



  const [nav, setNav] = useState(false)
  


  const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) =>{
    setToggleState (index);
    
   }

   const toggleTabInt = (index) =>{
    setToggleState (index);
    setNav(!nav);
   }

  const handleNav = () => {
    setNav(!nav);
  };
  
    return (
      <div className="font-Kanit min-h-screen w-screen overflow-x-hidden overflowy-y-scroll flex flex-col items-center justify-center">


        {toggleState === 1 ?(
           <>
                <img src='/mintbg.png'
                className='hidden md:flex object-cover w-screen h-full absolute -z-20'/>
                <img src='/skeleemobilemintpagebg.png'
                className='md:hidden flex object-cover w-full h-screen absolute -z-20'/>
                </>
               
                ) :

              toggleState === 2 ? (
                <>
                <img src='/mintbg.png'
                className='hidden md:flex object-cover w-screen h-full absolute -z-20'/>
                <img src='/skeleemobilemintpagebg.png'
                className='md:hidden flex object-cover w-full h-screen absolute -z-20'/>
                </>
                
              ):

              toggleState === 3 ? (
                <>
                 <img src='/utlitybg.png'
                className='hidden md:flex object-cover w-screen h-full absolute -z-20'/>
                <img src='/skeleeutlitybgmobile.png'
                className='md:hidden flex object-cover w-full h-screen absolute -z-20'/>
                </>
               
              ):

               (<>
               <img src='/utlitybg.png'
                className='hidden md:flex object-cover w-screen h-full absolute -z-20'/>
                <img src='/skeleeutlitybgmobile.png'
                className='md:hidden flex object-cover w-full h-screen absolute -z-20'/>
               </>)
              }
        
  
        <div className="relative flex flex-col items-center w-full h-screen">
        
  
        <div className='flex flex-col items-center justify-between w-full h-auto'>
        
          {/* Nav bar */}
          <div className='hidden h-[60px] w-full md:flex items-center justify-between px-16'>

<div className='w-[50%]'>

   <img src='/logo.png'
   className='w-auto h-[30px] cursor-pointer'
   onClick={() => toggleTab(1)}/>

</div>
 

 <div className='w-[50%]'>
   <div className='flex items-center justify-end'>
     <div className={toggleState === 2 ? 'px-3 py-1 text-[13px] bg-[#3ae516] text-white font-light rounded-sm uppercase mr-2 cursor-pointer' : 'px-3 py-1 text-[13px]  bg-[#3ae516] text-white font-light rounded-sm uppercase mr-2 cursor-pointer'}
     onClick={() => toggleTab(2)}>
       Mint
     </div>
     <div className={toggleState === 6 ? 'px-3 py-1 text-[13px] bg-white text-black font-light rounded-sm uppercase mx-2 cursor-pointer' : 'px-3 py-1 text-[13px] bg-black hover:bg-white hover:text-black text-white font-light rounded-sm uppercase mx-2 cursor-pointer'}
     onClick={() => toggleTab(6)}>
       About
     </div>
     <div className={toggleState === 3 ? 'px-3 py-1 text-[13px] bg-white text-black font-light rounded-sm uppercase mx-2 cursor-pointer' : 'px-3 py-1 text-[13px] bg-black hover:bg-white hover:text-black text-white font-light rounded-sm uppercase mx-2 cursor-pointer'}
     onClick={() => toggleTab(3)}>
       Utility
     </div>
     <div className={toggleState === 4 ? 'px-3 py-1 text-[13px] bg-white text-black font-light rounded-sm uppercase mx-2 cursor-pointer' : 'px-3 py-1 text-[13px] bg-black hover:bg-white hover:text-black text-white font-light rounded-sm uppercase mx-2 cursor-pointer'}
     onClick={() => toggleTab(4)}>
       Map
     </div>
     <div className={toggleState === 5 ? 'px-3 py-1 text-[13px] bg-white text-black font-light rounded-sm uppercase mx-2 cursor-pointer' : 'px-3 py-1 text-[13px] bg-black hover:bg-white hover:text-black text-white font-light rounded-sm uppercase mx-2 cursor-pointer'}
     onClick={() => toggleTab(5)}>
       FAQ
     </div>

     <a target='_blank' rel="noreferrer" href='https://twitter.com/skeleenft'>
     <div className='px-5 py-1 text-[13px] bg-black hover:bg-gray-700 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer'>
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill='#FFFFFF'><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
     </div>
     </a>
     <a href='/'>
     <div className='px-5 py-1 text-[13px] bg-black hover:bg-gray-700 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer'>
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg>
     </div>
     </a>
     {/*
     <a href='/'>
     <div className='px-5 py-1 text-[13px] bg-black hover:bg-gray-700 text-white font-medium rounded-sm uppercase mx-2 cursor-pointer'>
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF"><circle cx="9.67" cy="13" r="1.001"></circle><path d="M14.09 15.391A3.28 3.28 0 0 1 12 16a3.271 3.271 0 0 1-2.081-.63.27.27 0 0 0-.379.38c.71.535 1.582.809 2.471.77a3.811 3.811 0 0 0 2.469-.77v.04a.284.284 0 0 0 .006-.396.28.28 0 0 0-.396-.003zm.209-3.351a1 1 0 0 0 0 2l-.008.039c.016.002.033 0 .051 0a1 1 0 0 0 .958-1.038 1 1 0 0 0-1.001-1.001z"></path><path d="M12 2C6.479 2 2 6.477 2 12c0 5.521 4.479 10 10 10s10-4.479 10-10c0-5.523-4.479-10-10-10zm5.859 11.33c.012.146.012.293 0 .439 0 2.24-2.609 4.062-5.83 4.062s-5.83-1.82-5.83-4.062a2.681 2.681 0 0 1 0-.439 1.46 1.46 0 0 1-.455-2.327 1.458 1.458 0 0 1 2.063-.063 7.145 7.145 0 0 1 3.899-1.23l.743-3.47v-.004A.313.313 0 0 1 12.82 6l2.449.49a1.001 1.001 0 1 1-.131.61L13 6.65l-.649 3.12a7.123 7.123 0 0 1 3.85 1.23 1.46 1.46 0 0 1 2.469 1c.01.563-.307 1.08-.811 1.33z"></path></svg>
     </div>
     </a>
     */}
     <div className={toggleState === 2 ? 'px-3 py-1 text-[13px] bg-black text-white font-light rounded-sm uppercase mx-2 cursor-pointer' : 'px-3 py-1 text-[13px]  bg-black text-white font-light rounded-sm uppercase mx-2 cursor-pointer'}
     onClick={() => toggleTab(2)}>
       Connect
     </div>
   </div>
 </div>


</div>

{/* mobile nav */}

<div className='md:hidden h-full w-screen filter backdrop-blur-sm flex flex-row items-center justify-between px-4 pt-2 z-20'>

<a href='/'>
<img src='/logo.png'
className='w-auto h-[30px] cursor-pointer'
/>
</a>

  <div onClick={handleNav}
    className='flex md:hidden rounded-full cursor-pointer p-3 border border-white bg-black' >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
  </div>

  {/* overlay */}
    <div className={
    nav? ' md:hidden z-10 font-Kanit fixed left-0 top-0 w-full h-full bg-black' : "hidden left-[-100%]"
      }>
    
    {/* Side Drawer Menu */}
  <div className ={
    nav? "fixed left-0 top-0 w-[100%] bg-black h-screen py-2 px-4 ease-in duration-500"
    :'fixed left-[-100%] top-0 py-10 px-6 ease-in duration-500 h-screen'
    }>

    <div className='flex w-full items-center justify-between'>
      <a href='/'>
        <img src='/logo.png'
        className='w-auto h-[30px] cursor-pointer'
        />
      </a>
        <div onClick={handleNav}
        className='rounded-full hover:shadow-lg hover:shadow-gray-600 p-3 cursor-pointer bg-white'>
          <AiOutlineClose size={16} />
        </div>
    </div>
    <div className='flex flex-col items-start text-start mt-4 text-white'>
      <div className='w-full uppercase py-2 border-b-2 border-white tracking-wider font-semibold text-[18px] hover:text-blue-500' onClick={() => toggleTabInt(2)}>
      MINT</div>
      <div className='w-full uppercase py-2 border-b-2 border-white tracking-wider font-semibold text-[18px]' onClick={() => toggleTabInt(6)}>
      About</div>              
      <div className='w-full uppercase py-2 border-b-2 border-white tracking-wider font-semibold text-[18px]' onClick={() => toggleTabInt(3)}>
      Utility</div>
      <div className='w-full uppercase py-2 border-b-2 border-white tracking-wider font-semibold text-[18px]' onClick={() => toggleTabInt(4)}>
      Map</div>
      <div className='w-full uppercase py-2 border-b-2 border-white tracking-wider font-semibold text-[18px]' onClick={() => toggleTabInt(5)}>
      FAQ</div>
      <a target='_blank' rel="noreferrer" href='https://twitter.com/skeleenft' className='w-full'>
      <div className='w-full uppercase py-2 border-b-2 border-white tracking-wider font-semibold text-[18px]'>
      Twitter</div>
      </a>
      <a target='_blank' rel="noreferrer" href='/' className='w-full'>
      <div className='w-full uppercase py-2 border-b-2 border-white tracking-wider font-semibold text-[18px]'>
      Discord</div>
      </a>
      <a target='_blank' rel="noreferrer" href='/' className='w-full'>
      <div className='w-full uppercase py-2 border-b-2 border-white tracking-wider font-semibold text-[18px]'>
      Instagram</div>
      </a>
      {/*
      <a target='_blank' rel="noreferrer" href='/' className='w-full'>
      <div className='w-full uppercase py-2 border-b-2 border-white tracking-wider font-semibold text-[18px]'>
      Reddit</div>
      </a>
      
      <div className='w-full uppercase py-2 border-b-2 border-white tracking-wider font-semibold text-[18px]'>
      Rare studios new york</div> 
      */}
    </div>
  
  </div>
  </div>
    </div>

    {/* Contents */}
              
    {toggleState === 1 ? (

<div className={!nav?'absolute w-full md:top-[90px] top-[110px] flex flex-col items-center ':'hidden'}>
<div className='h-screen flex flex-col items-center'>
  <img src='/Skelee-logo.png' className='md:h-[40px] h-[25px] w-auto mt-8'/>
  <h1 className='text-[18px] tracking-wide text-center max-w-screen mt-8 font-LuckiestGuy'>
    Welcome<br/>
    to the world of Skelee, a community of <br/>
    immortal gamers
  </h1>
  <button className='md:hidden mt-5 rounded-md bg-[#3ae516] py-2 px-6 text-white font-mediumn font-Burbank uppercase'
  onClick={() => toggleTab(2)}>Mint</button>
  </div>
  <div className='w-full bg-black h-auto'>
  <Footer/>
  </div>
</div>


) :
// Mint section
toggleState === 2 ? (
  
  <>
  <div className={!nav? 'absolute w-full top-[90px] h-full min-h-screen':'hidden'}>
  <Mint/>
<div className='w-screen bg-black h-auto'>
  <Footer/>
  </div>
</div>

</>


) :

toggleState === 3 ? (

<>
<div className={!nav?'absolute w-full top-[90px] min-h-screen':'hidden'}>
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
  <div className={!nav?'absolute w-full top-[100px] min-h-screen':'hidden'}>
  <div className='min-h-screen'>
  <Roadmap/>
  </div>
  <Footer/>
</div>

</>

) :


toggleState === 5 ? (
<>
<div className={!nav?'absolute w-full top-[90px] min-h-screen':'hidden'}>
<div className='min-h-screen'>
  <FAQ/>
  </div>
  
</div>

</>

) :
toggleState === 6 ? (
<>
<div className={!nav?'absolute w-full top-[90px] min-h-screen':'hidden'}>
<div className='min-h-screen'>
<About/>
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

        </div>
  
      </div>
    ) 
}
