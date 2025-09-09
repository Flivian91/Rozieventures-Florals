import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="px-4">
      {/* Top Footer */}
      <div className="py-12 grid grid-cols-4 gap-4">
        <div className="">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={"/logo.svg"}
              width={50}
              height={50}
              alt=" Rozieventures Florals modern Logo"
            />
            <span className="text-xl font-semibold">Rozieventures Florals</span>
          </Link>
          <p>
            Creating beautiful moments with premium floral arrangements. Every
            bouquet tells a story of love, joy, and celebration.
          </p>
          <div className="flex items-center gap-2">
            <Link
              href={"#"}
              className="p-3 rounded-full hover:bg-accent hover:text-primary"
            >
              <FaFacebookF />
            </Link>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <h2 className="text-lg uppercase tracking-wider font-medium">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href={"/"}
                className="text-slate-700 hover:text-primary text-sm tracking-wide"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-slate-700 hover:text-primary text-sm tracking-wide"
              >
                Shop All
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-slate-700 hover:text-primary text-sm tracking-wide"
              >
                Create A Store
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-slate-700 hover:text-primary text-sm tracking-wide"
              >
                Subscribe for Member
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          <h2 className="text-lg uppercase tracking-wider font-medium">
            Flower Categories
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href={"/"}
                className="text-slate-700 hover:text-primary text-sm tracking-wide"
              >
                Roses
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-slate-700 hover:text-primary text-sm tracking-wide"
              >
                Peonies
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-slate-700 hover:text-primary text-sm tracking-wide"
              >
                Sunflowers
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-slate-700 hover:text-primary text-sm tracking-wide"
              >
                Tupils
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg uppercase tracking-wider font-medium">
            Flower Categories
          </h2>
          <div></div>
        </div>
      </div>
      {/* Down Footer */}
      <div className="border-t-2  flex items-center justify-between py-3 md:py-4">
        <div className="flex items-center gap-1">
          <span>@ 2025 Rozieventures Floral.</span>
          <span>All right reserved</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={"/privacy"}
            className="hover:text-primary text-sm text-slate-700"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/privacy"}
            className="hover:text-primary text-sm text-slate-700"
          >
            Terms of Service
          </Link>
          <Link
            href={"/privacy"}
            className="hover:text-primary text-sm text-slate-700"
          >
            Shipping Info
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
