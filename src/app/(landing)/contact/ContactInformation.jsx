import { Button } from "@/components/ui/button";
import { Dot, Phone } from "lucide-react";
import React from "react";

function ContactInformation() {
  return (
    <section className="flex flex-col gap-5">
      {/* Quick response */}
      <div className="flex flex-col gap-4 bg-white rounded-md p-5">
        <h2 className="text-2xl tracking-wider font-medium">
          Quick Response Promise
        </h2>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <p className="text-lg tracking-wide text-gray-600">
              Email inquiries answered within 2-4 hours during business days
            </p>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <p className="text-lg tracking-wide text-gray-600">
              Phone calls returned within 1 hour for urgent requests
            </p>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <p className="text-lg tracking-wide text-gray-600">
              Custom quotes provided within 24 hours
            </p>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <p className="text-lg tracking-wide text-gray-600">
              Emergency orders accommodated when possible
            </p>
          </li>
        </ul>
      </div>
      {/* Our services */}
      <div className="flex flex-col gap-4 bg-white rounded-md p-5">
        <h2 className="text-2xl tracking-wider font-medium">Our Services</h2>
        <div className="grid grid-cols-2 gap-2">
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <p className="text-lg tracking-wide text-gray-600">
                Wedding Arrangements
              </p>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <p className="text-lg tracking-wide text-gray-600">
                Funeral Flowers
              </p>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <p className="text-lg tracking-wide text-gray-600">
                Anniversary Specials
              </p>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <p className="text-lg tracking-wide text-gray-600">
                Corporate Events
              </p>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <p className="text-lg tracking-wide text-gray-600">
                Birthday Bouquets
              </p>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <p className="text-lg tracking-wide text-gray-600">
                Custom Designs
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* urgent */}
      <div className="bg-secondary/20 rounded-md p-5 flex flex-col gap-5">
        <h1 className="text-2xl font-medium">Need Something Urgent?</h1>
        <p className="tracking-wider font-medium text-gray-600">
          For same-day delivery or emergency floral needs, call our priority
          line:
        </p>
        <Button variant={"outline"}>
          <Phone />
          <span>Call Emergency Line</span>
        </Button>
      </div>
    </section>
  );
}

export default ContactInformation;
