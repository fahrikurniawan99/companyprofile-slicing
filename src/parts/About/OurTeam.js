import Image from "next/image";
import React from "react";

export default function OurTeam() {
  return (
    <section>
      <div className="bg-gray-100">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-6xl py-10 px-5 md:px-0">
            <h2 className="text-center text-4xl font-bold text-primary">
              Meet our team
            </h2>
            <h2 className="text-center text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <div className="my-20 gap-10 space-y-5 md:flex md:space-y-0">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl md:w-4/12">
                <div className="relative h-[450px] w-full">
                  <Image
                    src="/images/member-1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="m-7 border-l-4 border-orange-600 pl-2">
                  <p className="text-lg font-semibold text-primary">
                    Lucas L. Hamm
                  </p>
                  <p>CEO & Engineer</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl bg-orange-500 shadow-xl  md:w-4/12">
                <div className="relative h-[450px] w-full">
                  <Image
                    src="/images/member-2.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="m-7 border-l-4 border-white pl-2">
                  <p className="text-lg font-semibold text-white">
                    Miguel E. Knepper
                  </p>
                  <p className="text-white">Engineer</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl md:w-4/12">
                <div className="relative h-[450px] w-full">
                  <Image
                    src="/images/member-3.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="m-7 border-l-4 border-orange-600 pl-2">
                  <p className="text-lg font-semibold text-primary">
                    Lucas L. Hamm
                  </p>
                  <p>CEO & Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
