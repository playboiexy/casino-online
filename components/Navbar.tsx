"use client";
import React, { Children, useState } from "react";
import { HiHome } from "react-icons/hi2";
import { GiMineExplosion, GiPoolTriangle } from "react-icons/gi";
import { Sidebar } from "./Sidebar";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isSession, setIsSession] = useState(true);

  return (
    <>
      <nav className="sticky z-10 top-0">
        <div className="navbar bg-base-100 px-6">
          <div className="flex-1 gap-6 items-center">
            <a className="text-4xl font-extrabold">Digital Dice</a>
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
              <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 left-[-4rem] flex flex-col items-center">
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
          </div>

          <div className="flex-none gap-2">
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
        </div>
      </nav>
      <div className="flex ">
        <Sidebar />
        <div className="ml-44">{children}</div>
      </div>
    </>
  );
};
