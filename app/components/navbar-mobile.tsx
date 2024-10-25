import React from "react";

const NavbarMobile: React.FC = () => {
  return (
    <div className="md:hidden flex justify-between border-b px-2">
      <div className="flex flex-col items-center mr-2 py-4">
        <img
          className="w-8 h-8 object-cover"
          src="/images/home-icon.png"
          alt="Category Icon"
        />
        HOME
      </div>
      <div className="flex flex-col items-center mr-1 py-4">
        <img
          className="w-8 h-8 object-cove"
          src="/images/timeline-icon.png"
          alt="Category Icon"
        />
        TIMELINE
      </div>
      <div className="flex flex-col items-center mr-1 text-center py-4">
        <img
          className="w-8 h-8 object-cover"
          src="/images/all-game-icon.png"
          alt="Category Icon"
        />
        ALL GAMES
      </div>
      <div className="flex flex-col items-center mr-2 py-4">
        <svg
          className="w-8 h-8 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        SEARCH
      </div>
      <div className="flex flex-col items-center border-l pl-2 py-4">
        <img
          className="w-8 h-8 object-cover"
          src="/images/filter-icon.png"
          alt="Category Icon"
        />
        FILTER
      </div>
    </div>
  );
};

export default NavbarMobile;
