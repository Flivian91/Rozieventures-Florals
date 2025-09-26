import React from "react";
import SHopSearchBar from "./ShopSearchBar";
import { ShopFilterCategories } from "./ShopFilterCategories";
import { ShopFilterPrices } from "./ShopFilterPrices";
import { ShopFilterOptions } from "./ShopSortOptions";

function ShopFilter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4 mt-5 gap-5 items-center justify-center w-full">
      {/* Search bar */}
      <div className="">
      {/* // This line */}
        <SHopSearchBar />
      </div>
      {/* Search by category */}
      <ShopFilterCategories />
      {/* Search by price */}
      <ShopFilterPrices />
      {/* Filter option */}
      <ShopFilterOptions />
    </div>
  );
}

export default ShopFilter;
