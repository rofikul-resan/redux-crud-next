import React from "react";
import ProductCard from "./ProductCard";

const ProductContener = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductContener;
