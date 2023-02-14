import React from "react";
import { WrenchIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function SiteMap() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-6xl py-20 px-5 md:flex xl:px-0">
        <div className="text-white md:w-4/12">
          <div className="flex items-center gap-2">
            <WrenchIcon className="w-11" />
            <span>
              <h1 className="text-2xl font-bold">Contractors</h1>
              <h2 className="font-medium">Engineer & Contractors</h2>
            </span>
          </div>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
          </p>
          <div>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-4/12">
          <p className="text-lg font-bold text-white">Reject project</p>
          <div className="mt-5 flex">
            <div className="relative aspect-square w-24 overflow-hidden rounded-2xl">
              <Image
                layout="fill"
                src="/images/headerbg.avif"
                objectFit="cover"
              />
            </div>
            <p className="ml-5 leading-relaxed text-white">
              2972 Westheimer Rd. <br /> Santa An, Illionis 85486.
            </p>
          </div>
          <div className="mt-5 flex">
            <div className="relative aspect-square w-24 overflow-hidden rounded-2xl">
              <Image
                layout="fill"
                src="/images/image-2.jpg"
                objectFit="cover"
              />
            </div>
            <p className="ml-5 leading-relaxed text-white">
              2972 Westheimer Rd. <br /> Santa An, Illionis 85486.
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-4/12">
          <p className="text-lg font-bold text-white">Contact Info</p>
          <p className="mt-5 text-white">
            2972 Westheimer Rd. Santa An, <br /> Illionis 85486.
          </p>
          <p className="mt-10 font-semibold text-gray-500">
            Phone: <span className="text-whiet">(239) 556-0108</span>
          </p>
          <p className="font-semibold text-gray-500">
            Email: <span className="text-whiet">abcd@gmail.com</span>
          </p>
          <p className="font-semibold text-gray-500">
            Website <span className="text-whiet">contractors.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
