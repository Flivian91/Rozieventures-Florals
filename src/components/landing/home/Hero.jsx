import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import heroImage from "../../../../public/images/hero-florals.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    // Hero Section
    <section className="min-h-screen bg-primary/60 grid grid-cols-1 lg:grid-cols-2 gap-4 px-2">
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-start">
          <div className="flex items-center gap-2 bg-gray-200 py-2 px-4 rounded-full select-none">
            <FaStar className="text-accent" />
            <span>Premium Floral Arrangements</span>
          </div>
        </div>

        <div>
          <span>Beautifull Florals</span>
          <span>Delivered fresh</span>
        </div>
        <h1 className="text-2xl text-slate-200 tracking-wide">
          Discover our exquisite collection of premium floral arrangements,
          perfect for every occasion and delivered with love.
        </h1>
        <div className="flex items-center space-x-2 transition-all duration-300">
          <Button
            variant={"destructive"}
            className={"hover:scale-105  flex items-center cursor-pointer"}
          >
            <span>Shop Now</span>
            <ArrowRight />
          </Button>
          <Button>View Collections</Button>
        </div>
      </div>
      <div>
        <Image
          src={"/images/hero-1.svg"}
          height={100}
          width={100}
          alt="Hero Image"
          className="h-full w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
