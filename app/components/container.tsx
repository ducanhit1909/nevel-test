"use client";

import React from "react";
import Navbar from "./navbar";
import NavbarMobile from "./navbar-mobile";
import HotGames from "./hot-games";
import HottestCategory from "./hottest-categories";

const Container: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col w-full max-w-7xl mx-auto md:py-10 px-4 lg:px-0">
      <Navbar />
      <NavbarMobile />
      <div>
        <HotGames />
        <HottestCategory />
      </div>
    </div>
  );
};

export default Container;
