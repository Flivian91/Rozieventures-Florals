import Collection from "@/components/landing/home/Collection";
import Hero from "@/components/landing/home/Hero";
import Navbar from "@/components/landing/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      {/* HERO */}
      <Hero />
      {/* Collections */}
      <Collection />
    </div>
  );
}
