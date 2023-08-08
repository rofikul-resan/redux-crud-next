"use client";
import { store } from "@/RTK-state/store/Store";
import Navbar from "@/components/Navbar";
import ProductContener from "@/components/ProductContener";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <ProductContener />
      </main>
    </Provider>
  );
}
