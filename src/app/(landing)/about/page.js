import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Handshake, Heart, User2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const valueData = [
  {
    id: 1,
    icon: Heart,
    title: "Passion for Beauty",
    description:
      "Every arrangement is crafted with love and attention to detail, bringing natural beauty into your life.",
  },
  {
    id: 2,
    icon: Award,
    title: "Quality Excellence",
    description:
      "We source only the finest flowers and maintain the highest standards in every bouquet we create.",
  },
  {
    id: 3,
    icon: User2,
    title: "Customers First",
    description:
      "Your satisfaction is our priority. We're here to make every moment special with our floral expertise.",
  },
  {
    id: 4,
    icon: Handshake,
    title: "Sustainable Practices",
    description:
      "We're committed to eco-friendly practices and supporting local growers for a greener future.",
  },
];

function page() {
  return (
    <div className="py-6  bg-slate-50">
      <div className="flex px-5 flex-col gap-2 items-center justify-center">
        <Heading text={"Our Story"} />
        <h3 className="text-center text-lg tracking-wider w-[700px]">
          Founded with a passion for bringing natural beauty into everyday life,
          Rozieventures Florals has been creating stunning floral arrangements
          for over a decade.
        </h3>
      </div>
      <div className="grid px-5 grid-cols-2 gap-8 ">
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
      <div className="flex px-5 flex-col gap-3 py-10">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Heading text={"Our Values"} />
          <p className="text-center w-[600px] text-lg tracking-wider">
            These core principles guide everything we do, from selecting the
            finest flowers to delivering exceptional customer experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-4 mt-5 gap-8 smgrid-cols-2 grid-cols-1">
          {valueData.map((data) => {
            return (
              <Card
                key={data.id}
                className={
                  "group transition-all duration-300 flex flex-col hover:shadow-primary/40"
                }
              >
                <CardHeader
                  className={"flex items-center justify-center flex-col"}
                >
                  {/* Logo */}
                  <div className="p-4 group-hover:scale-110 bg-gradient-to-br to-secondary/10 from-primary text-white text-xl rounded-full">
                    <data.icon fontSize={20} />
                  </div>
                  <CardTitle>{data.title}</CardTitle>
                </CardHeader>
                <CardContent className={"-mt-3 text-center"}>
                  <p>{data.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="py-16 bg-primary/20 flex items-center justify-center flex-col gap-3">
        <h1 className="text-4xl  tracking-wider">Ready to Brighten Your Day?</h1>
        <p className="tracking-wider text-lg text-gray-600 leading-6 w-[400px] text-center">
          Discover our beautiful collection of fresh flowers, thoughtfully
          arranged to bring joy to any occasion.
        </p>
        <div className="flex items-center gap-3 mt-5">
          <Button>Shop Now</Button>
          <Button variant={"outline"}>Contact Us</Button>
        </div>
      </div>
    </div>
  );
}

export default page;
