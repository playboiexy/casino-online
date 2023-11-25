"use client";

import Image from "next/image";

export const Welcome = () => {
  const user = {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  };

  return (
    <div
      className="bg-base-100 lg:text-xl sm:text-2xl flex gap-4 text-white p-4 rounded-xl container pattern 
    shadow-xl sm:shadow-xl hover:shadow-black shadow-zinc-950 hover:scale-[1.02] duration-500 m-auto"
    >
      <div className="flex  bg-base-200 p-2 rounded-l-full rounded-2xl">
        <Image
          src="/dice.gif"
          alt="spinning dice"
          width={650}
          height={650}
          className="h-20 sm:h-32 w-auto rounded-full shadow-xl ring-8 ring-slate-100"
        />
        <p className="font-bold ">Welcome Back,</p>{" "}
        <p className="">{user.nick}</p>
        <p></p>
      </div>
    </div>
  );
};
