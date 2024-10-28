import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="hidden lg:flex mx-auto flex flex-col p-5 mr-4">
      <div className="flex bg-white border-b p-2">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="ml-2 w-full bg-transparent outline-none text-gray-700"
        />
      </div>
      <ul className="flex flex-col w-40 text-left text-white">
        <li className='my-4'>
          <a href="#" className="flex items-center text-[15.5px] font-semibold leading-[20px] text-left text-black">
            <img className="w-6 h-6 object-cover mr-2" src="/home-icon.png" alt="Category Icon" />
            Games Home
          </a>
        </li>
        <li className='my-4'>
          <a href="#" className="flex items-center text-[15.13px] font-semibold leading-[20px] text-left text-gray-300">
            <img className="w-6 h-6 object-cover mr-2" src="/timeline-icon.png" alt="Category Icon" />
            Timeline
          </a>
        </li>
        <li className='my-4'>
          <a href="#" className="flex items-center text-[15.13px] font-semibold leading-[20px] text-left text-gray-300">
            <img className="w-6 h-6 object-cover mr-2" src="/all-game-disable-icon.png" alt="Category Icon" />
            All Games
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
