import PageHeading from "@/components/common/PageHeading";
import ContactCard from "@/components/landing/contact/ContactCard";
import { Card } from "@/components/ui/card";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

function page() {
  return (
    <div>
      <div className="py-10 bg-primary/20">
        <PageHeading
          heading={"Get in Touch"}
          subHeading={
            "We'd love to hear from you! Whether you need a custom arrangement, have questions about our services, or want to discuss your special event."
          }
        />
      </div>
      {/* Address Area */}
      <ContactCard />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  );
}

export default page;
