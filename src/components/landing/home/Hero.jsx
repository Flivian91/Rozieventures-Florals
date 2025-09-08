import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "../../../../public/images/hero-florals.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    // Hero Section
    <section className="min-h-screen bg-primary/60 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <span>Fresh Flowers</span>
        {/* Fresh */}
        <h1>Find your own happiness</h1>
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
