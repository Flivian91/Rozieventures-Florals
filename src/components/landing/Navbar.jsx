"use client";
import { Heart, Menu, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";

function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="flex items-center justify-between py-2 px-2 bg-slate-100 shadow">
      {/* LOGO */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={"/logo.svg"}
          width={50}
          height={50}
          alt=" Rozieventures Florals modern Logo"
        />
        <span className="text-xl font-semibold hidden sm:inline-block">
          Rozieventures Florals
        </span>
      </Link>
      {/* LINKS */}
      <ul className="gap-2 items-center transform transition-all duration-200 hidden lg:flex">
        {navLinks.map((link) => {
          return (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`hover:bg-accent px-2 py-1 rounded text-sm tracking-wide font-semibold ${
                  link.path === pathname ? " bg-accent " : " bg-transparent "
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Actions */}
      <div className="flex gap-2 items-center">
        {/* WAITLIST */}
        <Button variant={"outline"} className="" asChild>
          <Link href={"/auth/login"}>
            <Heart />
          </Link>
        </Button>
        {/* CART */}
        <Button variant={"outline"} className="relative">
          <Badge
            className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -top-1.5 -right-1"
            variant="destructive"
          >
            2
          </Badge>
          <Link href={"/cart"}>
            <ShoppingCart />
          </Link>
        </Button>
        {/* ACCOUNT */}
        <Button variant={"outline"} className="cursor-pointer" asChild>
          <Link href={"/auth/login"}>
            <User />
          </Link>
        </Button>
        {/* MENU */}

        <Sheet>
          <SheetTrigger asChild>
            <div className="block lg:hidden">
              <Button variant={"outline"} className="">
                <Menu />
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent className="w-64 lg:hidden" side="left">
            <SheetHeader>
              <SheetTitle className={"flex items-center -mb-4"}>
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src={"/logo.svg"}
                    width={50}
                    height={50}
                    alt=" Rozieventures Florals modern Logo"
                    className=""
                  />
                  <span className="text-xl font-semibold hidden sm:inline-block">
                    Rozieventures Florals
                  </span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <Separator />
            {/* LINKS */}
            <ul className="gap-2 items-center flex-col transform transition-all duration-200 flex w-full px-4">
              {navLinks.map((link) => {
                return (
                  <li key={link.name} className="w-full">
                    <Link
                      href={link.path}
                      className={`hover:bg-accent px-2 py-1 rounded text-sm  tracking-wide font-semibold ${
                        link.path === pathname
                          ? " bg-accent w-full "
                          : " bg-transparent w-full "
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <SheetFooter>
              <Button variant={"outline"} className="cursor-pointer" asChild>
                <Link href={"/auth/login"}>
                  <User />
                  <span>Login</span>
                </Link>
              </Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
