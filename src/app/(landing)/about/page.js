import Heading from "@/components/common/Heading";
import React from "react";

function page() {
  return (
    <div className="py-6 px-5 bg-slate-50">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Heading text={"Our Story"} />
        <h3 className="text-center w-[500px]">
          Founded with a passion for bringing natural beauty into everyday life,
          Rozieventures Florals has been creating stunning floral arrangements
          for over a decade.X
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>story</div>
        <div>image</div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default page;
