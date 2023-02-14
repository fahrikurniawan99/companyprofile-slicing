import Button from "@/components/Button";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFoundCustom() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute top-1/2 left-1/2 z-40 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-10 px-5 md:flex-row md:items-center md:justify-center xl:px-0">
        <h1 className="text-9xl font-bold text-orange-600">
          4<span className="text-9xl text-primary">0</span>4
        </h1>
        <div>
          <ExclamationTriangleIcon className="w-10 text-red-700" />
          <p className="text-3xl font-bold leading-relaxed text-primary">
            oops! The page you <br /> requested was not found!
          </p>
          <p className="text-xl text-primary">
            Sorry, But the page you are looking for does't exist!
          </p>
          <Button className={"mt-5 text-white"}>
            <Link href={"/"}>Back to Home</Link>
          </Button>
        </div>
      </div>
      <div className="absolute h-full w-full bg-white opacity-80"></div>
      <div className="relative h-full w-full -z-10 ">
        <Image src="/images/headerbg.avif" objectFit="cover" layout="fill" alt="notfound" />
      </div>
    </div>
  );
}
