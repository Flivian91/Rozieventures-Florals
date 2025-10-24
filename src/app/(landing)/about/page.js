import ContactBanner from "@/components/banners/ContactBanner";
import PageHeading from "@/components/common/PageHeading";
import AboutCoreValues from "@/components/landing/about/AboutCoreValues";
import AboutHeroSection from "@/components/landing/about/AboutHeroSection";
import { Button } from "@/components/ui/button";
import React from "react";
function page() {
  return (
    <div className="py-6  bg-slate-50">
      <div className="bg-primary/20 py-10">
        <PageHeading
          heading={"Our Story"}
          subHeading={
            "Founded with a passion for bringing natural beauty into everyday life,Rozieventures Florals has been creating stunning floral arrangements for over a decade."
          }
        />
      </div>
      {/* About Hero Section */}
      <AboutHeroSection />
      {/* Our Core Values Section */}
      <AboutCoreValues />
      {/* Contact us and Shop section */}
      <ContactBanner />
    </div>
  );
}

export default page;
