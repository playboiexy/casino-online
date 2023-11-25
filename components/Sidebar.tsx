"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { VscRuby } from "react-icons/vsc";
import { IoIosSend } from "react-icons/io";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { useRouter } from "next/router";
import { Content } from "next/font/google";
import Context, { IContext } from "./ContextProvider";

const chatMessages = [
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  // ... I tak dalej, aż do 20 wiadomości
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  // ... I tak dalej, aż do 20 wiadomości
  {
    nick: "User123",
    content: "Cześć, jak się masz?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 24), // Przykładowa data - 15 listopada 2023, 13:24
  },
  {
    nick: "GamerGirl99",
    content: "Witaj! Mam się świetnie, a Ty?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 13, 26), // Przykładowa data - 15 listopada 2023, 13:26
  },
  // ... Kolejne wiadomości
  {
    nick: "CoolPlayer123",
    content: "Co dzisiaj gramy?",
    avatarimg:
      "https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg",
    date: new Date(2023, 10, 15, 14, 5), // Przykładowa data - 15 listopada 2023, 14:05
  },
  // ... I tak dalej, aż do 20 wiadomości
];

export const Sidebar = () => {
  const { toggleButton, setToggleButton } = React.useContext(
    Context
  ) as IContext;

  const handleClick = () => {
    setToggleButton((prev) => (prev = !prev));
  };

  return (
    <div
      className={`z-20  text-white w-80  fixed flex-col h-full  justify-evenly shadow-xl shadow-black duration-500  hidden md:flex ${
        toggleButton ? "-translate-x-full" : "translate-x-0"
      } `}
    >
      <aside
        className={`bg-base-200 text-white w-80  fixed flex-col h-full flex p-1 justify-evenly  duration-500 ${
          toggleButton ? "" : "translate-x-0"
        } `}
      >
        <Link href="/rules" className="text-sm underline text-fuchsia-800">
          Chat Rules
        </Link>
        <ul className="flex flex-col gap-1 w-full h-[78%] jus overflow-y-scroll">
          {chatMessages.map((i) => {
            return (
              <li
                key={i.date.toString()}
                className="bg-  text-sm flex-col rounded-lg p-0.5 flex "
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={i.avatarimg ?? ""}
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-xl"
                  />
                  <p>{i.nick}</p>
                </div>

                <p className="font-extralight">{i.content}</p>
              </li>
            );
          })}
        </ul>
        <form className="mx-0.5 gap-1 flex input grid-cols-2 mb-10 text-xs">
          <input className="rounded-md w-96 bg-transparent" />
          <div className="flex flex-col items-center justify-evenly">
            <button type="submit" className="">
              <IoIosSend size={20} />
            </button>
            <button type="submit" className="">
              <MdOutlineInsertEmoticon size={20} />
            </button>
          </div>
        </form>
      </aside>
      <button
        onClick={handleClick}
        className={`bg-base-100 duration-500 fixed left-[20rem] bottom-20 flex justify-self-end p-2 rounded-r-md  `}
      >
        {!toggleButton ? <FaArrowLeft size={24} /> : <FaArrowRight size={24} />}
      </button>
    </div>
  );
};
