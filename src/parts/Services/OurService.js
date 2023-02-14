import {
  CalendarDaysIcon,
  HomeModernIcon,
  PaintBrushIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function OurService() {
  return (
    <section>
      <div>
        <h2 className="mt-20 text-center text-4xl font-bold text-primary">
          Our Service
        </h2>
        <p className="mb-10 text-center text-primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="bg-gray-100">
          <div className="mx-auto flex flex-col flex-wrap items-start items-center justify-start gap-20 py-20 md:w-[700px] md:flex-row md:justify-center">
            <div className="flex h-72 w-64 flex-col justify-center  rounded-xl p-5 text-center">
              <CalendarDaysIcon className="mx-auto w-20 text-primary" />
              <p className="text-xl font-semibold text-primary">Management</p>
              <p className="mt-5 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet
              </p>
            </div>
            <div className="flex h-72 w-64 flex-col justify-center rounded-xl bg-white p-5 text-center  shadow-xl">
              <HomeModernIcon className="mx-auto w-20 text-primary" />
              <p className="border-b-4 border-orange-600 pb-2 text-xl font-semibold text-primary">
                Engineering
              </p>
              <p className="mt-5 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet
              </p>
            </div>
            <div className="flex h-72 w-64 flex-col justify-center rounded-xl p-5 text-center">
              <PaintBrushIcon className="mx-auto w-20 text-primary" />
              <p className="text-xl font-semibold text-primary">Renovations</p>
              <p className="mt-5 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet
              </p>
            </div>
            <div className="flex h-72 w-64 flex-col justify-center  rounded-xl p-5 text-center">
              <WrenchIcon className="mx-auto w-20 text-primary" />
              <p className="text-xl font-semibold text-primary">Maintance</p>
              <p className="mt-5 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
