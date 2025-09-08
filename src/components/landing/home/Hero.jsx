import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-florals.jpg"
        alt="Hero Flowers"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-secondary to-primary opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col items-center gap-6">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/80 py-2 px-4 rounded-full shadow select-none">
          <FaStar className="text-yellow-500" />
          <span className="text-sm font-medium">
            Premium Floral Arrangements
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-white">
          Beautiful Florals{" "}
          <span className="block text-pink-300 drop-shadow-lg">
            Delivered Fresh
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-white/90 max-w-2xl">
          Discover our exquisite collection of premium floral arrangements,
          perfect for every occasion and delivered with love.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:scale-105 flex items-center gap-2">
            Shop Now <ArrowRight size={18} />
          </Button>
          <Button
            variant="secondary"
            className="bg-white text-black hover:scale-105"
          >
            View Collection
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 text-white">
          <div>
            <p className="text-2xl font-bold text-yellow-400">10K+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-400">500+</p>
            <p className="text-sm">Floral Designs</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-400">24/7</p>
            <p className="text-sm">Fresh Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
