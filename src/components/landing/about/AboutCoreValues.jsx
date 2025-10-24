import Heading from "@/components/common/Heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Handshake, Heart, User2 } from "lucide-react";
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

function AboutCoreValues() {
  return (
    <section className="flex px-5 flex-col gap-3 py-10">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Heading text={"Our Values"} />
        <p className="text-center md:w-[600px] text-lg tracking-wider">
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
    </section>
  );
}

export default AboutCoreValues;
