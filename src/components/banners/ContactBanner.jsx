import React from "react";
import { Button } from "../ui/button";

function ContactBanner() {
  return (
    <section className="py-16 bg-primary/20 flex items-center justify-center flex-col gap-3">
      <h1 className="text-4xl  tracking-wider">Ready to Brighten Your Day?</h1>
      <p className="tracking-wider text-lg text-gray-600 leading-6 w-[400px] text-center">
        Discover our beautiful collection of fresh flowers, thoughtfully
        arranged to bring joy to any occasion.
      </p>
      <div className="flex items-center gap-3 mt-5">
        <Button>Shop Now</Button>
        <Button variant={"outline"}>Contact Us</Button>
      </div>
    </section>
  );
}

export default ContactBanner;
