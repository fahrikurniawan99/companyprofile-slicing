import Button from "@/components/Button";
import { Bars3Icon, WrenchIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header({ variant }) {
  const refHeaderContainer = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
    window.addEventListener("scroll", (e) => {
      if (refHeaderContainer.current && window.scrollY > 100) {
        return refHeaderContainer.current?.classList.add("bg-primary");
      }
      refHeaderContainer.current?.classList.remove("bg-primary");
    });
    return () => {
      window.removeEventListener("scroll", (e) => {
        if (refHeaderContainer.current && window.scrollY > 100) {
          return refHeaderContainer.current?.classList.add("bg-primary");
        }
        refHeaderContainer.current?.classList.remove("bg-primary");
      });
    };
  }, [refHeaderContainer, isOpen]);

  return (
    <div
      className={[
        "px-5 text-white xl:px-0",
        variant === "transparent"
          ? "fixed z-50 w-screen transition-all duration-200"
          : "sticky top-0 z-50 bg-primary",
      ].join(" ")}
      ref={variant && refHeaderContainer}
    >
      <div className="mx-auto flex max-w-6xl justify-between pt-7 pb-4">
        <div className="flex items-center gap-2">
          <WrenchIcon className="w-11" />
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">Contractors</h1>
            <h2 className="font-medium">Engineer & Contractors</h2>
          </Link>
        </div>

        <Bars3Icon
          className="w-10 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        <ul
          className={[
            "absolute top-full left-0 flex w-full flex-col justify-center gap-5 space-y-3 overflow-hidden px-5 transition-all duration-700 md:static md:flex md:w-auto md:flex-row md:items-center md:justify-start md:space-y-0 md:px-0",
            isOpen ? "h-64 bg-primary md:h-auto" : "h-0 md:h-auto",
          ].join(" ")}
        >
          <li className="font-semibold">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="font-semibold">
            <Link href={"/services"}>Sevices</Link>
          </li>
          <li className="font-semibold">
            <Link href={"/work"}>Work</Link>
          </li>
          <li>
            <Button>
              <Link href={"/contact"}>Contact us</Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
