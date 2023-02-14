import Image from "next/image";
import React from "react";

export default function OurWork() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 xl:px-0">
        <h2 className="mt-20 text-center text-4xl font-bold text-primary">
          Our Work
        </h2>
        <p className="mb-10 text-center text-primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="grid h-[600px] grid-cols-12 grid-rows-6 gap-5 md:h-[800px]">
          <div className="relative col-span-6 row-span-3 overflow-hidden rounded-3xl md:col-span-4 md:row-span-3">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/headerbg.avif"
            />{" "}
          </div>
          <div className="relative col-span-6 row-span-2 overflow-hidden rounded-3xl md:col-span-5 md:row-span-4">
            <Image layout="fill" objectFit="cover" src="/images/image-1.avif" />{" "}
          </div>
          <div className="relative col-span-6 row-span-2 overflow-hidden rounded-3xl md:col-span-3 md:row-span-4">
            <Image layout="fill" objectFit="cover" src="/images/image-2.jpg" />{" "}
          </div>
          <div className="relative col-span-6 row-span-3 overflow-hidden rounded-3xl md:col-span-4 md:row-span-3">
            <Image layout="fill" objectFit="cover" src="/images/image-3.jpg" />{" "}
          </div>
          <div className="relative col-span-6 row-span-2 overflow-hidden rounded-3xl md:col-span-8 md:row-span-2">
            <Image layout="fill" objectFit="cover" src="/images/quotesbg.jpg" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
