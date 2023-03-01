import { useState, Fragment } from "react";
import Footer from '../components/footer'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function FAQs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
  <>
    <div id='faqs'className='md:mx-16 mx-2 p-6 rounded-lg text-white'>
      <h1 className='md:text-[40px] text-[30px] font-Kanit text-white text-center uppercase font-semibold tracking-widest mb-8'> FAQ</h1>
      <Accordion open={open === 1} animate={customAnimation}  className='text-white  text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What is Skelee NFT
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        Skelee is a collection of 8,000 unique NFTs on the Ethereum blockchain. Inspired by late-night gaming, Beeple, 3D art, and a friend that never gave up on us. We released Skelee from the underworld to show him the other side of life. Filled with gaming, friends, competitions, and augmented reality experiences, Skelee has a lot to explore.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 2} animate={customAnimation} className='text-white  text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(2)} className='text-white  text-[21px] text-start'>
          What is an NFT?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        An NFT(non-fungible token) is a crypto token representing a verifiably unique entity that is mutually interchangeable.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 3} animate={customAnimation} className='text-white  text-[22px] text-start'>
        <AccordionHeader onClick={() => handleOpen(3)} className='text-white  text-[21px] text-start'>
         When does the Mint start?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
          Mint has started.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 4} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(4)} className='text-white  text-[21px] text-start'>
          How will minting work?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        We will mint an 'unrevealed' Skelee NFT. On the reveal day, we will be setting the real metadata live and users will be able to 'refresh metadata' on https://opensea.io/ to see their revealed Skelee! Please proceed with caution, your Skelee may be too FIRE for you to maintain composure.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 5} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(5)} className='text-white text-[21px] text-start'>
          What are the benefits of acquiring a Skelee?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        Please refer to our utility page to see the benefits of acquiring a Skelee.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 6} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(6)} className='text-white  text-[21px] text-start'>
          Who can mint Skelee?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        Anyone who has Ethers
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 7} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(7)} className='text-white  text-[21px] text-start'>
          What are the licensing right / Intellectual property?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        Non-Commercial. However Commercial rights will be granted in the future once we complete our road map.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 8} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(8)} className='text-white  text-[21px] text-start'>
          How to do I gain Access to the Skelee League Pass?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
       After selling out we will put the Skelee League Pass portal live. The Skelee League Pass will grant you access to our Gaming Champions League. Our first test on this with our holders will only serve as a beta experience. However, holders will have an opportunity to compete on a small scale and win real rewards.

To gain access to the Skelee Gaming Champions League, holders must obtain both the Skelee NFT and Skelee League Pass. Skelee holders will be able to claim their free Skelee League Pass to enter the Beta Gaming Champions League.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 9} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(9)} className='text-white  text-[21px] text-start'>
          Can I burn my Skelee?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        No, not at this time.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 10} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(10)} className='text-white  text-[21px] text-start'>
          Are Skelee NFT’S on ERC-721 or ERC1155?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        They are ERC-721A
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 11} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(11)} className='text-white  text-[21px] text-start'>
          Why are you using ERC-721A?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        By implementing ERC721A NFT contracts, we can significantly reduce gas fees during NFT batch minting. With this innovative NFT minting contract, our holders can save up to 80% on mints. Not only that, but we as a community can also steer clear of the dreaded network congestion that plagues the Ethereum ecosystem. It's the smart solution for efficient and hassle-free NFT creation.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 12} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(12)} className='text-white  text-[21px] text-start'>
          What is web3 and why is it important?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        As explained in ethereum.org/en/web3/ , "Web3 has become a catch-all term for the vision of a new, better internet. At its core, Web3 uses blockchains, cryptocurrencies, and NFTs to give power back to the users in the form of ownership. A 2020 post on Twitter said it best: Web1 was read-only, Web2 is read-write, Web3 will be read-write-own." The Internet has made a great history over the past decades, but users are gradually finding themselves living in a "Digital Black Hole": on the Internet, users spend a huge amount of time creating " digital assets", such as game props, social graph data, and uploaded videos, which did not belong to themselves. Fortunately, we believe that the next rising technology super cycle, namely Metaverse, and Web3, will change this situation forever. Our vision and mission is to build an innovative new generation of digital entertainment experiences for all users in the world. In the new platform, we will return the Individual Digital Sovereignty of game props and other digital assets back to users, share the revenue generated with our communities, and co-create our own Metaverse and Web3 world with all participants.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 13} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(13)} className='text-white  text-[21px] text-start'>
          Where can I view my Skelee after purchasing it?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        You can see your Skelee NFT in your wallet or you can view it on Opensea in your profile.
        </AccordionBody>
      </Accordion>
      
       <Accordion open={open === 14} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(14)} className='text-white  text-[21px] text-start'>
          Will there be other Skelee’s in the future?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        No this is the only collection that will contain skeleton-based PFPs.
        </AccordionBody>
      </Accordion>
      
       <Accordion open={open === 15} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(15)} className='text-white  text-[21px] text-start'>
          Will there be other characters in the future?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        Yes, there will be other Skelee friends, however, their identities will be revealed in Q2 or sooner. We have a real plan for our community, being gamers at heart, we have identified all the missing parts this industry needs. And we are here to fulfill those needs for our family and holders.
        </AccordionBody>
      </Accordion>
      
       <Accordion open={open === 16} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(16)} className='text-white  text-[21px] text-start'>
          Do Skelee’s breed?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        No, breeding is not currently on the menu.
        </AccordionBody>
      </Accordion>
      
       <Accordion open={open === 17} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(17)} className='text-white  text-[21px] text-start'>
          What is the royalty %?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        10% goes back to development.
        </AccordionBody>
      </Accordion>
      
       <Accordion open={open === 18} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(18)} className='text-white  text-[21px] text-start'>
         Who created Skelee?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        Rare Studios New York, and we are all in on WEB 3 gaming and AR immersive experiences.
        </AccordionBody>
      </Accordion>
      
       <Accordion open={open === 19} animate={customAnimation} className='text-white text-[21px] text-start'>
        <AccordionHeader onClick={() => handleOpen(19)} className='text-white  text-[21px] text-start'>
          Will there be a metaverse?
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        What is life without the future.
        </AccordionBody>
      </Accordion>
      
      
      <Accordion open={open === 20} animate={customAnimation} className='text-white text-[21px] text-start md:mt-16 mt-6'>
        <AccordionHeader onClick={() => handleOpen(20)} className='text-white  text-[21px] text-start'>
          Terms
        </AccordionHeader>
        <AccordionBody className='text-start text-gray-300 text-[20px]'>
        <a href='/terms' className='hover:text-[#3ae516]'>Review Terms</a>
        </AccordionBody>
      </Accordion>
      
      
    </div>
    <Footer/>
    </>
  );
}








































