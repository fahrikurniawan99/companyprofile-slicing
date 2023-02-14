import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({ title }) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto flex h-56 max-w-6xl flex-col justify-center px-5 xl:px-0">
        <h2 className="text-4xl font-semibold text-primary">{title}</h2>
        <span className="mt-2 text-primary">
          <Link href={"/"}>Home</Link>
          <ChevronRightIcon className="m-auto inline-block w-4" />
          <span className="font-medium text-orange-600">{title}</span>
        </span>
      </div>
    </div>
  );
}
