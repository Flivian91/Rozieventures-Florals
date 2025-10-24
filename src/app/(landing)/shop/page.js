import Heading from "@/components/common/Heading";
import PageHeading from "@/components/common/PageHeading";
import ShopFilter from "@/components/landing/shop/ShopFilter";
import { ShopPagination } from "@/components/landing/shop/ShopPagination";
import ShopProducts from "@/components/landing/shop/ShopProducts";
import React from "react";

function page() {
  return (
    <div className="py-10 px-5 bg-slate-50">
      <div className="py-5">
        <PageHeading
          heading={"Our Floral Collection"}
          subHeading={
            "Discover our carefully curated selection of premium floral arrangements"
          }
        />
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
