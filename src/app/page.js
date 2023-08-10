"use client";
import { getCart } from "@/RTK-state/Slice/productSlice";
import ProductContener from "@/components/ProductContener";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <main>
      <ProductContener />
    </main>
  );
}
