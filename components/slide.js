
import {Link} from 'react-scroll/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, {
  EffectCoverflow,
  Autoplay
} from "swiper";

SwiperCore.use(EffectCoverflow);

export default function Slider() {

  return (
      <>
      <div className='flex flex-col w-full h-auto items-center font-Gotham'>
        <h1 className='text-white text-[20px] text-center mt-10 mb-[40px]'>Skelee is a community of late gamers</h1>

        {/* slider */}
        <div className='w-screen flex flex-row item-center justify-evenly mt-6 px-16'>
        <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>

      <div className='w-full h-[80px] bg-gray-800 flex flex-col items-center justify-center mt-10 py-8'>
      <button className='text-center py-2 px-10 tracking-widest uppercase bg-[#c0c0c0] font-bold rounded-full text-[28px]'>MINT NOW</button>
      </div>

      <h1 className='text-[28px] text-center uppercase font-bold tracking-wider text-white mt-8'>Skelee perks</h1>
      <h1 className='text-[20px] text-center uppercase font-medium text-white mt-8'>access to gaming champion league</h1>
      <h1 className='text-[20px] text-center uppercase font-medium text-white mt-8'>skelee ar immersive experiences</h1>
      <h1 className='text-[20px] text-center uppercase font-medium text-white mt-8'>skelee merch</h1>
      <h1 className='text-[20px] text-center uppercase font-medium text-white mt-8'>early access to meta beach</h1>

      <div className='w-full h-auto py-6 bg-black flex flex-col items-center justify-center mt-10'>
        <h1 className='text-[20px] text-center uppercase font-bold tracking-wider text-white'>
          Skelee   +   designed by rare studios new york   +   join the discord  
        </h1>
      </div>
      </div>
      </>
    
  );
}













