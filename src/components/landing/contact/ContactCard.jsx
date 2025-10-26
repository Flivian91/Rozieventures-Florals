import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Mail, MapPin, Phone, Timer, User2 } from "lucide-react";
import React from "react";
const valueData = [
  {
    id: 1,
    icon: MapPin,
    title: "Vist our Studio",
    details: {
      det1: "123 Flower Street",
      det2: "Garden District, GD 12345",
    },
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Us",
    details: {
      det1: "+1 (555) 123-ROSE",
      det2: "+1 (555) 456-BLOOM",
    },
  },
  {
    id: 3,
    icon: Mail,
    title: "Email Us",
    details: {
      det1: "hello@rozieventures.com",
      det2: "orders@rozieventures.com",
    },
  },
  {
    id: 4,
    icon: Timer,
    title: "Business Hours",
    details: {
      det1: "Mon - Fri: 8:00 AM - 6:00 PM",
      det2: "Sat - Sun: 9:00 AM - 5:00 PM",
    },
  },
];

function ContactCard() {
  return (
    <section className="flex px-5 flex-col gap-3 py-10">
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
                <p>{data.details.det1}</p>
                <p>{data.details.det2}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default ContactCard;
