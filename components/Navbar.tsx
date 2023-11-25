"use client";
import React, { Children, useState } from "react";
import { HiHome } from "react-icons/hi2";
import { GiMineExplosion, GiPoolTriangle } from "react-icons/gi";
import { Sidebar } from "./Sidebar";
import { VscRuby } from "react-icons/vsc";
import { IoDiceOutline } from "react-icons/io5";

export const Navbar = () => {
  const [isSession, setIsSession] = useState(true);

  return (
    <>
      <nav className="sticky px-2 py-1 z-50 top-0 flex bg-base-100 justify-between items-center">
        <div className=" flex items-center gap-20 justify-center">
          <div className="ml-8 flex sm:text-4xl text-xl font-extrabold">
            Digital Dice
            <IoDiceOutline size={48} className="text-white" />
          </div>

          <div className="flex sm:gap-6 items-center">
            <a className="btn btn-secondary btn-outline duration-300" href="/">
              <HiHome size={20} />
            </a>

            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-secondary btn-outline duration-300"
              >
                Games
              </label>
              <ul className="mt-3 z-40 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 left-[-4rem] flex flex-col items-center">
                <li className="mb-3 ">
                  <a className="text-center text-xl " href="/games/plinko">
                    <GiPoolTriangle />
                    Plinko
                  </a>
                </li>
                <li className="">
                  <a className="text-center text-xl" href="/games/mines">
                    <GiMineExplosion />
                    Mines
                  </a>
                </li>
              </ul>
            </div>

            <button className="p-2 flex flex-1 items-center gap-2 bg-base-300 rounded-lg ml-1/2">
              <VscRuby size={28} className="text-teal-400" />
              <p>323.00</p>
            </button>
          </div>
        </div>

        <div className="">
          {isSession ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://static.vecteezy.com/system/resources/thumbnails/015/740/076/small_2x/dice-icon-design-templates-free-vector.jpg"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-secondary btn-outline w-24 hover:scale-105 ">
              Sign in
            </button>
          )}
        </div>
      </nav>

      <Sidebar />
    </>
  );
};
