import { cartReducer } from "../Slice/productSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    cartData: cartReducer,
  },
});
