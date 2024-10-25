"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Sample images for the slider
const images = [
  "/images/slider-banner.png",
  "/images/slider-banner.png",
  "/images/slider-banner.png",
];

const Banner: React.FC = () => {
  return (
    <div className="relative h-[400px] flex items-center justify-center">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
