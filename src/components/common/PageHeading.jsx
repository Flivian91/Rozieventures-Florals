import React from "react";
import Heading from "./Heading";

function PageHeading({heading, subHeading}) {
  return (
    <div className="flex px-5 flex-col gap-2 items-center justify-center">
      <Heading text={heading} />
      <h3 className="text-center text-gray-600 sm:text-lg tracking-wider md:w-[700px]">
        {subHeading}
      </h3>
    </div>
  );
}

export default PageHeading;
