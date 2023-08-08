import React from "react";
import ProductCard from "./ProductCard";
import { Container } from "@mui/material";

const ProductContener = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 my-6 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
};

export default ProductContener;
