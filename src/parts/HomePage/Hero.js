import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-container px-5 pt-48 xl:px-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <h1 className="text-4xl font-bold leading-relaxed text-white">
          Engineers & <br /> Contactors
        </h1>
        <p className="text-xl leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sed
          debitis natus tenetur necessitatibus error, <br /> deleniti dicta
          quos, dolores optio,
          <br /> incidunt ullam autem placeat expedita sit quis consectetur!
          <br />
          Laudantium, quas aperiam.
        </p>
        <Button className="mt-5 w-fit text-white" variant={"outline"}>
          <Link href={"/services"}>Our services</Link>
        </Button>
        <div className="mt-20 grid w-full grid-cols-4 gap-5 overflow-hidden md:gap-0 md:space-y-0 md:rounded-t-2xl">
          <div className="col-span-4 flex h-36 items-center justify-center gap-2 rounded-xl bg-white/10 md:col-span-1 md:rounded-none">
            <p className="border-b-2 border-orange-600 text-6xl font-bold text-white">
              34
            </p>
            <span>
              <p className="text-white">Project</p>
              <p className="text-2xl font-bold text-white">Design</p>
            </span>
          </div>
          <div className="col-span-4 flex h-36 items-center justify-center gap-2 rounded-xl bg-orange-600 md:col-span-1 md:rounded-none">
            <p className="border-b-2 border-slate-600 text-6xl font-bold text-white">
              97
            </p>
            <span>
              <p className="text-white">Project</p>
              <p className="text-2xl font-bold text-white">Clients</p>
            </span>
          </div>
          <div className="col-span-4 flex h-36 items-center justify-center gap-2 rounded-xl bg-white/10 md:col-span-1 md:rounded-none">
            <p className="border-b-2 border-orange-600 text-6xl font-bold text-white">
              25
            </p>
            <span>
              <p className="text-white">Complite</p>
              <p className="text-2xl font-bold text-white">Project</p>
            </span>
          </div>
          <div className="col-span-4 flex h-36 items-center justify-center gap-2 rounded-xl bg-white/10 md:col-span-1 md:rounded-none">
            <p className="border-b-2 border-orange-600 text-6xl font-bold text-white">
              97<span className="text-base">%</span>
            </p>
            <span>
              <p className="text-white">Clients</p>
              <p className="text-2xl font-bold text-white">Satisfaction</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
