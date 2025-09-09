import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="px-4">
      {/* Top Footer */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Link href="/" className="flex items-center space-x-2 ">
            <Image
              src={"/logo.svg"}
              width={50}
              height={50}
              alt=" Rozieventures Florals modern Logo"
            />
            <span className="text-xl font-semibold">Rozieventures Florals</span>
          </Link>
          <p className="text-slg text-slate-700">
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
            <Link
              href={"#"}
              className="p-3 rounded-full hover:bg-accent hover:text-primary"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href={"#"}
              className="p-3 rounded-full hover:bg-accent hover:text-primary"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={"#"}
              className="p-3 rounded-full hover:bg-accent hover:text-primary"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className=" flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-lg uppercase tracking-wider font-medium">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-3 items-center md:items-start">
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
        <div className=" flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-lg uppercase tracking-wider font-medium">
            Flower Categories
          </h2>
          <ul className="flex flex-col gap-3 items-center md:items-start">
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
            Get in Touch
          </h2>
          <div className="flex flex-col gap-1 items-center text-slate-700 md:items-start">
            <div className="flex items-center gap-2">
              <MapPin size={17} />
              <span>Nairobi Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={17} />
              <Link href={"/"} className="hover:text-primary">
                +254758463864
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={17} />
              <Link
                href={"mailto:Bouquetsandcaps@gmail.com"}
                className="hover:text-primary"
              >
                Bouquetsandcaps@gmail.com
              </Link>
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-lg uppercase tracking-wider font-medium">
              Business Hours
            </h2>
            <div className="flex flex-col gap-2 text-sm tracking-wide mt-2">
              <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
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
