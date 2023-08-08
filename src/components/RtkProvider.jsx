import { store } from "@/RTK-state/store/Store";
import React from "react";
import { Provider } from "react-redux";

const RtkProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RtkProvider;
