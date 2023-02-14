import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="my-20 flex h-56 flex-col justify-center bg-white text-center">
      <p className="text-4xl font-bold tracking-wide text-primary">
        Do you need profesionals for <br /> you next construction project?
      </p>
      <Button className="mx-auto mt-5 w-fit text-white">
        <Link href={"/contact"}>Contact us</Link>
      </Button>
    </div>
  );
}
