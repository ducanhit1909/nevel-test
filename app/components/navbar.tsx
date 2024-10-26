import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const path = usePathname();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // event search
    }
  };

  return (
    <>
      <div className="hidden lg:flex mx-auto flex flex-col p-5">
        <div className="flex bg-white border-b p-2">
          <svg
            className="w-6 h-6 text-gray-500"
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
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full bg-transparent outline-none text-gray-700 font-semibold"
            onKeyDown={handleKeyDown}
          />
        </div>
        <ul className="flex flex-col w-40 text-left text-white">
          <li className="my-4">
            <Link
              href="/"
              className={`flex items-center ${
                path === "/" ? "text-black" : "text-gray-300"
              }`}
            >
              <img
                className="w-6 h-6 object-cover mr-2"
                src="/images/home-icon.png"
                alt="Category Icon"
              />
              Games Home
            </Link>
          </li>
          <li className="my-4">
            <Link
              href="/timeline"
              className={`flex items-center ${
                path === "/timeline" ? "text-black" : "text-gray-300"
              }`}
            >
              <img
                className="w-6 h-6 object-cover mr-2"
                src="/images/timeline-icon.png"
                alt="Category Icon"
              />
              Timeline
            </Link>
          </li>
          <li className="my-4">
            <Link
              href="/all-games"
              className={`flex items-center ${
                path === "/all-games" ? "text-black" : "text-gray-300"
              }`}
            >
              <img
                className="w-6 h-6 object-cover mr-2"
                src="/images/all-game-icon.png"
                alt="Category Icon"
              />
              All Games
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
