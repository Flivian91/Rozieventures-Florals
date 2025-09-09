import React from "react";
import products from "../../../../data/MOCK_DATA.json";
import ProductsCard from "@/components/card/ProductsCard";

function ShopProducts() {
  const visibleProducts = products.filter((product) => product.id < 13);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
      {visibleProducts.map((data) => {
        return <ProductsCard key={data.id} data={data} />;
      })}
    </div>
  );
}

export default ShopProducts;
