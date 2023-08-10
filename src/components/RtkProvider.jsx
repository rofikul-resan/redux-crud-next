"use client";
import { store } from "@/RTK-state/store/Store";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
