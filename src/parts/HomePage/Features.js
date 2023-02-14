import React from "react";
import {
  CalendarDaysIcon,
  HomeModernIcon,
  PaintBrushIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Features() {
  return (
    <div className="relative w-full md:h-[700px]">
      <Image
        src="/images/featuresbg.jpg"
        fill="cover"
        objectFit="cover"
        className="-z-40"
        alt="features-thumb"
      />
      <div className="absolute -z-30 h-full w-full bg-primary/90 md:w-1/2"></div>
      <div className="mx-auto max-w-6xl px-5 pt-20">
        <p className="font-medium text-orange-600">Building a legacy</p>
        <p className="text-4xl font-bold leading-relaxed text-white">
          Stunning structures, <br /> sustainably built
        </p>
        <p className="mt-3 leading-relaxed  text-white">
          Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-5 align-middle md:w-[500px]">
          <div className="col-span-2 text-center md:col-span-1">
            <CalendarDaysIcon className="mx-auto mb-3   w-12 text-orange-600" />
            <p className="text-2xl font-bold text-white">Management</p>
            <p className=" leading-relaxed text-white">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipisicing.
            </p>
          </div>
          <div className="col-span-2 text-center md:col-span-1">
            <HomeModernIcon className="mx-auto mb-3 w-12 text-orange-600" />
            <p className="text-2xl font-bold text-white">Engineering</p>
            <p className=" leading-relaxed text-white">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipisicing.
            </p>
          </div>
          <div className="col-span-2 text-center md:col-span-1">
            <PaintBrushIcon className="mx-auto mb-3 w-12 text-orange-600" />
            <p className="text-2xl font-bold text-white">Renovations</p>
            <p className=" leading-relaxed text-white">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipisicing.
            </p>
          </div>
          <div className="col-span-2 text-center md:col-span-1">
            <WrenchIcon className="mx-auto mb-3 w-12 text-orange-600" />
            <p className="text-2xl font-bold text-white">Maintenance</p>
            <p className=" leading-relaxed text-white">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
