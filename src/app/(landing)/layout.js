import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import React from "react";

function layout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
