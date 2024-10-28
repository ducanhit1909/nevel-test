import React from 'react';

const NavbarMobi: React.FC = () => {
  return (
    <div className="md:hidden flex justify-between border-b">
      <div className="flex flex-col items-center mr-2 py-4">
        <img className="w-6 h-6" src="/home-page-icon.png" alt="Category Icon" />
        <span className='text-[10px] font-semibold leading-[10px] text-center text-gray-300 mt-2'>HOME</span>
      </div>
      <div className="flex flex-col items-center mr-1 py-4">
        <img className="w-6 h-6" src="/timeline-icon.png" alt="Category Icon" />
        <span className='text-[10px] font-semibold leading-[10px] text-center text-gray-300 mt-2'>TIMELINE</span>        
      </div>
      <div className="flex flex-col items-center mr-1 text-center py-4">
        <img className="w-6 h-6" src="/all-game-icon.png" alt="Category Icon" />
        <span className='text-[10px] font-semibold leading-[10px] text-center mt-2'>ALL GAMES</span>        
      </div>
      <div className="flex flex-col items-center mr-2 py-4">
        <img className="w-6 h-6" src="/search-icon.png" alt="Category Icon" />
        <span className='text-[10px] font-semibold leading-[10px] text-center text-gray-300 mt-2'>SEARCH</span>        
      </div>
      <div className="flex flex-col items-center border-l pl-2 py-4">
        <img className="w-6 h-6" src="/filter-icon.png" alt="Category Icon" />
        <span className='text-[10px] font-semibold leading-[10px] text-center text-gray-300 mt-2'>FILTER</span>        
      </div>
    </div>
  );
};

export default NavbarMobi;
