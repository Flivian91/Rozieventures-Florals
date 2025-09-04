"use client";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

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
    <nav className="flex items-center justify-between py-2 px-2 bg-slate-100">
      {/* LOGO */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={"/logo.svg"}
          width={50}
          height={50}
          alt=" Rozieventures Florals modern Logo"
        />
        <span className="text-xl font-semibold">Rozieventures Florals</span>
      </Link>
      {/* LINKS */}
      <ul className="flex gap-2 items-center transform transition-all duration-200">
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
        <Button variant={"outline"} className="">
          <Heart />
        </Button>
        <Button variant={"outline"} className="">
          
          <Link href={"/cart"}>
            <ShoppingBag />
          </Link>
        </Button>
        <Button variant={"outline"} className="">
          <User />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
