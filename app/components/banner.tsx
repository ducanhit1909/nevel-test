'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../styles/banner.css'

// Sample images for the slider
const images = [
  '/slider-banner.png',
  '/slider-banner.png',
  '/slider-banner.png'
];

const imagesMobi = [
  '/banner-chicken.png',
  '/banner-chicken.png',
  '/banner-chicken.png',
  '/banner-chicken.png',
  '/banner-chicken.png'
];

const Banner: React.FC = () => {
  return (
    <div>
      <div className="hidden relative h-[400px] md:flex items-center justify-center">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          loop
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-full">
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden relative h-[400px] flex items-center justify-center">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          loop
          id="swipper-chicken-banner"
        >
          {imagesMobi.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-full">
                <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
              </div>
              <div className='absolute bottom-[40px] left-[35%]'>
                <h3 className='text-[24.41px] font-normal leading-[27px] text-center text-white mb-4'>Chicky Run</h3>
                <div className='flex justify-center'>
                  <p className='text-[13.78px] font-normal leading-[13px] text-center text-white'>Game Details</p>
                  <img className="w-3 h-3 cursor-pointer ml-2" src="/next-white-icon.png" alt="Next" />
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
