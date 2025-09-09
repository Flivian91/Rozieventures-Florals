import Heading from "@/components/common/Heading";
import ShopFilter from "@/components/landing/shop/ShopFilter";
import { ShopPagination } from "@/components/landing/shop/ShopPagination";
import ShopProducts from "@/components/landing/shop/ShopProducts";
import React from "react";

function page() {
  return (
    <div className="py-10 px-5">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Heading text={"Our Floral Collection"} />
        <h3 className="text-center w-[500px]">Discover our carefully curated selection of premium floral arrangements</h3>
      </div>
      {/* Filter Part */}
      <ShopFilter />
      {/* Products */}
      <ShopProducts />
      {/* Pagination */}
      <ShopPagination />
    </div>
  );
}

export default page;
