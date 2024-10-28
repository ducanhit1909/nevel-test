"use client";

import React from "react";
import Navbar from "./navbar";
import NavbarMobi from "./narbar-mobile";
import HotGames from "./hot-games";
import HottestCategory from "./hottest-category";

const Container: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col w-full max-w-7xl mx-auto md:py-10 px-4 lg:px-0">
      <Navbar />
      <NavbarMobi />
      <div>
        <HotGames />
        <HottestCategory />
      </div>
    </div>
  );
};

export default Container;
