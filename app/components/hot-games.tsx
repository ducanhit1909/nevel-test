import React from "react";
import DropdownFilter from "./dropdown-filter";

interface Game {
  title: string;
  description: string;
  image: string;
  avatar: string;
}

const hotGames: Game[] = [
  {
    title: "Mahjong Ways",
    description:
      "4TECH™ has just launched their very first Mahjong inspired slot machine gam…",
    image: "/images/mahjong-ways.png",
    avatar: "/images/mahjong-ways-avatar.png",
  },
  {
    title: "Wild Bandito",
    description:
      "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
    image: "/images/wild-bandito.png",
    avatar: "/images/wild-bandito-avatar.png",
  },
];

const HotGames: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between my-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-center md:text-left">
          Hot Game
        </h2>
        <div className="hidden md:flex">
          <img
            className="w-6 h-6 cursor-pointer"
            src="/images/previous-icon.png"
            alt="Previous"
          />
          <img
            className="w-6 h-6 cursor-pointer"
            src="/images/next-icon.png"
            alt="Next"
          />
        </div>
        <div className="md:hidden">
          <DropdownFilter />
        </div>
      </div>
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
        {hotGames.map((game, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <div className="flex items-start space-x-4">
                <img
                  className="w-20 h-20 rounded-lg object-cover"
                  src={game.avatar}
                  alt={game.title}
                />
                <div className="flex-1">
                  <div className="text-lg font-bold">{game.title}</div>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">
                    {game.description}
                  </p>
                </div>
                <div className="mt-4 text-right">
                  <button className="border rounded-lg text-black py-2 px-4 hover:bg-gray-100 transition">
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
            src="/images/mask-group.png"
            alt="Mask Group"
            className="w-full h-48 object-cover"
          />
          <div className="p-5 card-bg">
            <div className="flex items-start space-x-4">
              <img
                className="w-20 h-20 rounded-lg object-cover"
                src="/images/mask-group-avatar.png"
                alt="Mask Group Avatar"
              />
              <div className="flex-1">
                <div className="text-lg font-bold text-white">
                  Tree Of Fortune
                </div>
                <p className="mt-2 text-gray-300 text-sm md:text-base">
                  Legend has it that a farmer was granted a seed from a deity.
                </p>
              </div>
            </div>
            <div className="flex justify-between my-6">
              <div>
                <h3 className="text-white">MEDIUM</h3>
                <p className="text-gray-300">Volatility</p>
              </div>
              <div>
                <h3 className="text-white">95.01%</h3>
                <p className="text-gray-300">RTP</p>
              </div>
              <div>
                <h3 className="text-white">x5000</h3>
                <p className="text-gray-300">Maximum Win</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotGames;
