import Image from "next/image";
import React, { useState } from "react";

interface Game {
  name: string;
  image: string;
}

export const MainTile: React.FC = () => {
  const [gameId, setGameId] = useState(0);

  const games: Game[] = [
    {
      name: "Plinko",
      image: "/plinko.jpg",
    },
    {
      name: "Mines",
      image: "/mines.jpg",
    },
  ];

  const handleButton = (increment: number) => {
    setGameId((prevId) => {
      const newId = prevId + increment;
      if (newId < 0) {
        return games.length - 1;
      } else if (newId >= games.length) {
        return 0;
      }
      return newId;
    });
  };

  return (
    <div
      className={`
      bg-base-100 bg- sm:text-2xl flex text-white rounded-xl container pattern 
      shadow-xl hover:shadow-black shadow-zinc-950 hover:scale-[1.02] duration-500 overflow-hidden h-96`}
    >
      <div>
        <Image
          src={games[gameId].image}
          alt={games[gameId].name}
          width={650}
          height={650}
          className="duration-200 scale-100 relative w-auto h-auto"
        />
        <p>{games[gameId].name}</p>
      </div>

      <p className="fixed justify-center">
        <button onClick={() => handleButton(1)} className="fixed">
          {" "}
          +{" "}
        </button>
        <button onClick={() => handleButton(-1)} className="fixed">
          {" "}
          -{" "}
        </button>
      </p>
    </div>
  );
};
