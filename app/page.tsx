"use client";
import Context, { IContext } from "@/components/ContextProvider";
import { MainTile } from "@/components/sections/MajorTile";
import { Welcome } from "@/components/sections/Welcome";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

export default function Home() {
  const { toggleButton } = React.useContext(Context) as IContext;

  return (
    <main
      className={`grid justify-center items-start duration-500 gap-2 sm:gap-6 flex-col min-h-screen m-auto ml-0
      ${!toggleButton ? "md:ml-80" : "ml-0"}`}
    >
      <div className="gap-2 sm:gap-6 mx-auto flex justify-center sm:flex-row flex-col mt-2 sm:mt-6">
        <Welcome />
        <Welcome />
      </div>
      <MainTile />
    </main>
  );
}
