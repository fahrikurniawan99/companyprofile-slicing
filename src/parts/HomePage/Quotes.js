import Image from "next/image";
import React from "react";

export default function Quotes() {
  return (
    <div className="relative mx-auto flex h-80 items-center justify-center px-5 xl:px-0">
      <p className="before:content-['  '] z-40 text-2xl font-medium text-white before:mr-2 before:inline-block before:h-[.1rem] before:w-20 before:bg-white">
        we are one of{" "}
        <span className="font-bold text-primary">the largest construction</span>{" "}
        and <br />
        development compaines in the world, and we want to <br /> improve
        society and <br />
        the future through of efforts expertise.
      </p>
      <div className="absolute h-full w-full bg-orange-600 opacity-70"></div>
      <Image src="/images/quotesbg.jpg" layout="fill" objectFit="cover" className="-z-30" />
    </div>
  );
}
