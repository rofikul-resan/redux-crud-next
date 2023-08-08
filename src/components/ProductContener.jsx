"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container } from "@mui/material";
import axios from "axios";

const ProductContener = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("/Product.json")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 my-6 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductContener;
