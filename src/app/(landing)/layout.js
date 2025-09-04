import Navbar from "@/components/landing/Navbar";
import React from "react";

function layout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default layout;
