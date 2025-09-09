import ProductsCard from "@/components/card/ProductsCard";
import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import products from "../../../../data/MOCK_DATA.json";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Collection() {
  const visibleProducts = products.filter((product) => product.id < 4);
  return (
    <div className="py-16 px-4 flex flex-col gap-5">
      <div className="flex flex-col gap-3 items-center">
        <Heading text={"Featured Collections"} />
        <p className="text-center tracking-wide text-lg md:text-2xl lg:w-[700]">
          Handpicked premium arrangements crafted with love and delivered fresh
          to your doorstep
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleProducts.map((item) => {
          return <ProductsCard key={item.id} data={item} />;
        })}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Link
          href={"/shop"}
          className="px-4 py-2 border rounded border-slate-300 text-slate-800 tracking-wider flex items-center gap-2 hover:bg-accent hover:border-transparent"
        >
          <span>View All Products</span>
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}

export default Collection;
