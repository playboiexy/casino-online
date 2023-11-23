import { Welcome } from "@/components/sections/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex sm:ml-96 gap-12 sm:gap-6 flex-col min-h-screen max-w-full items-center justify-start">
      <section className="grid grid-cols-2 gap-20 py-10">
        <Welcome />
        <Welcome />
      </section>
      <section className=" ">sad</section>
      <section>sad</section>
    </main>
  );
}
