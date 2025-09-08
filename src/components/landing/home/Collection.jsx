import ProductsCard from "@/components/card/ProductsCard";
import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import products from "../../../../data/MOCK_DATA.json";
import React from "react";

function Collection() {
  const visibleProducts = products.filter((product) => product.id < 7);
  return (
    <div className="py-16 px-4 flex flex-col gap-5">
      <div className="flex flex-col gap-3 items-center">
        <Heading text={"Featured Collections"} />
        <p className="text-center tracking-wide text-lg md:text-2xl w-[700]">
          Handpicked premium arrangements crafted with love and delivered fresh
          to your doorstep
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleProducts.map((item) => {
          return <ProductsCard key={item.id} data={item} />;
        })}
      </div>
      <div className="flex items-center justify-center">
        <Button variant={"outline"}>View All Products</Button>
      </div>
    </div>
  );
}

export default Collection;
