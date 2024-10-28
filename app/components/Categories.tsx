// components/Categories.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../styles/categories.css'

interface Category {
  color: string;
  icon: string;
  title: string;
  desc: string;
  image: string;
}

const categories: Category[] = [
  {
    color: "bg-blue-600",
    icon: "/music-icon.png",
    title: "Music",
    desc: "Music makes everything better, and these games will grove to it!",
    image: "/hiphop-panda.png"
  },
  {
    color: "bg-green-700",
    icon: "/table-game-icon.png",
    title: "Table Games",
    desc: "The classic table games for the gentlemen and ladies.",
    image: "/european-blackjack.png"
  },
];

const categorieMobi: Category[] = [
  {
    color: "bg-blue-600",
    icon: "/music-icon.png",
    title: "Music",
    desc: "Music makes everything better, and these games will grove to it!",
    image: "/hiphop-panda.png"
  },
  {
    color: "bg-green-700",
    icon: "/table-game-icon.png",
    title: "Table Games",
    desc: "The classic table games for the gentlemen and ladies.",
    image: "/european-blackjack.png"
  },
  {
    color: "bg-blue-600",
    icon: "/music-icon.png",
    title: "Music",
    desc: "Music makes everything better, and these games will grove to it!",
    image: "/hiphop-panda.png"
  },
  {
    color: "bg-green-700",
    icon: "/table-game-icon.png",
    title: "Table Games",
    desc: "The classic table games for the gentlemen and ladies.",
    image: "/european-blackjack.png"
  },
  {
    color: "bg-blue-600",
    icon: "/music-icon.png",
    title: "Music",
    desc: "Music makes everything better, and these games will grove to it!",
    image: "/hiphop-panda.png"
  },
];

const HottestCategory: React.FC = () => {
  return (
    <section className='mt-10'>
      <div className='flex justify-between'>
        <h2 className="text-[18px] md:text-[28.13px] font-semibold mb-5 text-center md:text-left">Hottest Category</h2>
        <div className='hidden md:flex'>
          <img className="w-6 h-6 cursor-pointer opacity-50" src="/previous-icon.png" alt="Previous" />
          <img className="w-6 h-6 cursor-pointer" src="/next-icon.png" alt="Next" />
        </div>
      </div>
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-[#0000000D] rounded-3xl overflow-hidden p-6">
            <div className="flex flex-row gap-6 h-full">
              {/* Left Section */}
              <div className='flex flex-col h-full flex-1'>
                <div className={`p-4 text-white rounded-2xl ${category.color} flex-grow`}>
                  <img className="w-8 h-8 object-cover mb-4" src={category.icon} alt="Category Icon" />
                  <h3 className='text-[21.66px] font-normal leading-[16px] text-left'>{category.title}</h3>
                  <p className='my-4 text-gray-300 text-[13.78px] font-normal leading-[20px] text-left line-clamp-2'>{category.desc}</p>
                </div>
                {/* Small images */}
                <div className='flex mt-4'>
                  <img className="w-full h-auto rounded" src="/avatar-1.png" alt="Avatar 1" />
                  <img className="w-full h-auto rounded" src="/avatar-2.png" alt="Avatar 2" />
                </div>
              </div>

              {/* Right Section */}
              <div className='flex flex-col h-full flex-1'>
                {/* Small images */}
                <div className='flex mb-4'>
                  <img className="w-1/2 h-auto rounded" src="/avatar-3.png" alt="Avatar 3" />
                  <img className="w-1/2 h-auto rounded" src="/avatar-4.png" alt="Avatar 4" />
                </div>
                {/* Large image */}
                <div className="flex-grow">
                  <img className="w-full h-auto max-h-60 object-cover rounded-2xl" src={category.image} alt="Category Image" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          id="wiper-categories-mobi"
          loop
        >
          {categorieMobi.map((category, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="rounded-3xl overflow-hidden p-6 bg-gray-200">
                <div className="flex flex-row gap-6 h-full">
                  {/* Left Section */}
                  <div className='flex flex-col h-full flex-1'>
                    <div className={`p-4 text-white rounded-2xl ${category.color} flex-grow`}>
                      <img className="!w-6 !h-6 object-cover mb-2" src={category.icon} alt="Category Icon" />
                      <h3 className='text-[17.27px] font-semibold'>{category.title}</h3>
                      <p className='text-[10.99px] font-normal my-2 text-white line-clamp-3'>{category.desc}</p>
                    </div>
                    {/* Small images */}
                    <div className='flex mt-4'>
                      <img className="w-1/2 h-auto rounded" src="/avatar-1.png" alt="Avatar 1" />
                      <img className="w-1/2 h-auto rounded" src="/avatar-2.png" alt="Avatar 2" />
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className='flex flex-col h-full flex-1'>
                    {/* Small images */}
                    <div className='flex mb-4'>
                      <img className="w-1/2 h-auto rounded" src="/avatar-3.png" alt="Avatar 3" />
                      <img className="w-1/2 h-auto rounded" src="/avatar-4.png" alt="Avatar 4" />
                    </div>
                    {/* Large image */}
                    <div className="flex-grow">
                      <img className="w-full h-[160px] object-cover rounded-2xl" src={category.image} alt="Category Image" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className='md:hidden my-16'>
        <button className="border w-full rounded-lg bg-[#00000005] text-black p-4 flex justify-center items-center text-[15px] font-semibold">
          Load More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HottestCategory;
