"use client";

import React, { useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("GAMES");

  const menuItems = ["HOME", "GAMES", "MATCH", "COMPANY", "EVENTS", "PARTNERS"];

  return (
    <header className="absolute top-0 left-0 w-full z-10 header-bg opacity-80">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="w-20">
          <Image
            src="/logo.png"
            alt="GTech Logo"
            width={128}
            height={25}
            priority
          />
        </div>

        <ul className="hidden md:flex space-x-6 text-[15px] font-normal tracking-[0.5px] text-left text-white/50">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`${
                activeMenu === item
                  ? "text-white border-b-2 border-white mb-[-28px]"
                  : "text-white/50"
              }`}
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-gray-900 text-white flex flex-col items-center space-y-6 py-4">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => {
                  setActiveMenu(item);
                  setIsOpen(false);
                }}
                className={`${
                  activeMenu === item ? "text-white" : "text-white/50"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
