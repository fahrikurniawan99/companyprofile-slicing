import React from "react";
import {
  ChevronRightIcon,
  PuzzlePieceIcon,
  DocumentMagnifyingGlassIcon,
  SparklesIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/Button";

export default function Helping() {
  return (
    <div className="mx-auto max-w-6xl py-28 px-5 font-medium xl:px-0">
      <h2 className="text-orange-600">Building legacy</h2>
      <h2 className="text-4xl font-semibold leading-relaxed text-primary">
        Building a Legacy <br /> of Success
      </h2>
      <div className="flex h-auto flex-col items-center overflow-hidden md:h-[250px] md:flex-row ">
        <div className="md:w-3/12">
          <p className="leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Eius officiis, reiciendis eos qui laborum eaque quae asperiores eum
            ipsa necessitatibus.
          </p>
          <Button
            className={"mt-5 flex items-center justify-center text-primary"}
            variant={"outline"}
          >
            more <ChevronRightIcon className="w-4 stroke-2" />
          </Button>
        </div>
        <div className="h-full gap-5 space-y-5 overflow-hidden rounded-lg bg-gray-100 p-5 md:flex md:w-9/12 md:space-y-0 mt-10 md:mt-0">
          <div className="h-full px-5 py-2 md:w-3/12">
            <PuzzlePieceIcon className="w-10 text-orange-600" />
            <p className="mt-3 text-2xl font-semibold text-primary">Stategy</p>
          </div>
          <div className="h-full px-5 py-2 md:w-3/12">
            <DocumentMagnifyingGlassIcon className="w-10 text-orange-600" />
            <p className="mt-3 text-2xl font-semibold text-primary">Result</p>
          </div>
          <div className="relative h-full rounded-xl bg-white px-5 py-2 shadow-xl md:w-3/12">
            <SparklesIcon className="w-10 text-orange-600" />
            <p className="mt-3 text-2xl font-semibold text-primary">
              Expertise
            </p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button className="absolute right-5 bottom-3 aspect-square w-10 rounded-full bg-primary text-white">
              <ChevronRightIcon className="m-auto w-5" />
            </button>
          </div>
          <div className="h-full px-5 py-2 md:w-3/12">
            <MegaphoneIcon className="w-10 text-orange-600" />
            <p className="mt-3 text-2xl font-semibold text-primary">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
