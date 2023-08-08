"use client";
import { Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import CartProductItem from "./CartProductItem";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  return (
    <section>
      <Container>
        {cartData?.map((pro) => (
          <CartProductItem key={pro.id} product={pro} />
        ))}
      </Container>
    </section>
  );
};

export default Cart;
