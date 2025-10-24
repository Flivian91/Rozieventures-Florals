import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="py-6 px-5 bg-slate-50">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Heading text={"Our Story"} />
        <h3 className="text-center text-lg tracking-wider w-[700px]">
          Founded with a passion for bringing natural beauty into everyday life,
          Rozieventures Florals has been creating stunning floral arrangements
          for over a decade.
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-8 ">
        <div className="flex flex-col gap-4 px-2 py-8">
          <h1 className="text-4xl font-mono tracking-wider">
            Blooming since 2024
          </h1>
          <div className="flex flex-col gap-3 tracking-wider leading-6 text-gray-600 text-lg">
            <p>
              What started as a small passion project in our founders home
              garden has blossomed into a thriving floral business that serves
              customers across the region. We believe that flowers have the
              power to transform spaces, lift spirits, and mark lifes most
              precious moments.
            </p>
            <p>
              Our team of skilled florists combines traditional techniques with
              modern aesthetics to create arrangements that are both timeless
              and contemporary. Whether youre celebrating a special occasion,
              expressing sympathy, or simply brightening someones day, were here
              to help you find the perfect flowers.
            </p>
            <p>
              Every bloom tells a story, and were honored to be part of yours.
            </p>
            <div className="mt-4">
              <Button className={"text-lg px-5 py-5"}>
                Shop Our Collections
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full px-2 py-8 bg-gradient-to-br rounded-lg from-gray-50 via-gray-100 to-gray-300">
          <div className="relative h-96   ">
            <Image
              src={"/images/purple.png"}
              alt="Roses Image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default page;
