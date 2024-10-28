// components/HotGames.tsx
import React from 'react';
import Dropdown from './Dropdown';

interface Game {
    title: string;
    description: string;
    image: string;
    avatar: string;
}

const hotGames: Game[] = [
    {
        title: "Mahjong Ways",
        description: "4TECH™ has just launched their very first Mahjong inspired slot machine gam…",
        image: "/mahjong-ways.png",
        avatar: "/mahjong-ways-avatar.png"
    },
    {
        title: "Wild Bandito",
        description: "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
        image: "/wild-bandito.png",
        avatar: "/wild-bandito-avatar.png"
    },
];

const HotGames: React.FC = () => {
    return (
        <section>
            <div className='flex justify-between my-4'>
                <h2 className="text-[18px] md:text-[28.13px] font-semibold mb-5 text-center md:text-left">Hot Game</h2>
                <div className='hidden md:flex'>
                    <img className="w-6 h-6 cursor-pointer opacity-50" src="/previous-icon.png" alt="Previous" />
                    <img className="w-6 h-6 cursor-pointer" src="/next-icon.png" alt="Next" />
                </div>
                <div className='md:hidden'>
                    <Dropdown />
                </div>
            </div>
            <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
                {hotGames.map((game, index) => (
                    <div key={index} className="bg-white overflow-hidden">
                        <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="py-5">
                            <div className="flex items-start space-x-4">
                                {/* Avatar */}
                                <img
                                    className="w-20 h-20 rounded-lg object-cover"
                                    src={game.avatar}
                                    alt={game.title}
                                />
                                {/* Game Info */}
                                <div className="flex-1">
                                    <div className="text-[19.22px] font-semibold leading-[23px] text-left">{game.title}</div>
                                    <p className="mt-2 text-gray-600 text-sm md:text-[13.67px] line-clamp-2 font-normal leading-[18px] text-left">{game.description}</p>
                                </div>
                                <div className="mt-4 text-right">
                                    <button className="border rounded-[3px] text-black py-1 px-6 hover:bg-gray-100 text-[13.78px] font-semibold">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:hidden grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="/mask-group.png"
                        alt="Mask Group"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5 card-bg">
                        <div className="flex items-start space-x-4">
                            {/* Avatar */}
                            <img
                                className="w-20 h-20 rounded-lg object-cover"
                                src="/mask-group-avatar.png"
                                alt="Mask Group Avatar"
                            />
                            {/* Game Info */}
                            <div className="flex-1">
                                <div className="text-[16px] font-semibold text-white">Tree Of Fortune</div>
                                <p className="mt-2 text-white/50 text-[12px] md:text-base">Legend has it that a farmer was granted a seed from a deity.</p>
                            </div>
                        </div>
                        <div className='flex justify-between my-6'>
                            <div>
                                <h3 className='text-[14px] font-normal leading-[16px] text-white'>MEDIUM</h3>
                                <p className='text-[12px] font-normal text-white/50'>Volatility</p>
                            </div>
                            <div>
                                <h3 className='text-[14px] font-normal leading-[16px] text-white'>95.01%</h3>
                                <p className='text-[12px] font-normal text-white/50'>RTP</p>
                            </div>
                            <div>
                                <h3 className='text-[14px] font-normal leading-[16px] text-white'>x5000</h3>
                                <p className='text-[12px] font-normal text-white/50'>Maximum Win</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotGames;
