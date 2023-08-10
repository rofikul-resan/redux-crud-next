"use client";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCart = createAsyncThunk("cart/getCart", async () => {
  let initialState = [];
  const initStateStr = localStorage.getItem("cart");
  if (initStateStr) {
    const initCart = await JSON.parse(initStateStr);
    initialState = [...initCart];
  } else {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  return initialState;
});

const Cart = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify([...state]));
    },
    deleteToCart: (state, action) => {
      const index = action.payload;
      const remain = state.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify([...state]));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      const data = action.payload;
      data.forEach((d) => state.push(d));
    });
  },
});

export const { addToCart, deleteToCart } = Cart.actions;
export const cartReducer = Cart.reducer;
