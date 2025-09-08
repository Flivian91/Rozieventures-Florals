import React from "react";

function Heading({ text }) {
  return (
    <div className="flex items-center justify-center">
      <h2 className="md:text-6xl text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
        {text}
      </h2>
    </div>
  );
}

export default Heading;
