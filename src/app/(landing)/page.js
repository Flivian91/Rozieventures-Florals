import Collection from "@/components/landing/home/Collection";
import Hero from "@/components/landing/home/Hero";
import NewsletterSection from "@/components/landing/home/NewsLetter";
import Testimonials from "@/components/landing/home/Testimonials";
import VideoShowcase from "@/components/landing/home/VideoShowcase";
import Navbar from "@/components/landing/Navbar";
import { SubscribeModel } from "@/components/landing/SubscribeModel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <Hero />
      {/* Collections */}
      <Collection />
      {/* Video Showcase */}
      <VideoShowcase />
      {/* Testimonial */}

      <Testimonials />
      {/* Newsletter Section */}
      <NewsletterSection />
      {/* Subscribe Model */}
      <SubscribeModel />
    </div>
  );
}
