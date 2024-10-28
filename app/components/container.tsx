'use client';

import React from 'react';
import HotGames from './HotGames';
import HottestCategory from './Categories';
import Navbar from './Navbar';
import NavbarMobi from './NavbarMobi';

const Container: React.FC = () => {
    return (
        <div className='flex md:flex-row flex-col w-full max-w-7xl mx-auto md:py-10 px-4 lg:px-0'>
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
