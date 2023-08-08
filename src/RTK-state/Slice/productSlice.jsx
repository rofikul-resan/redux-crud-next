const { createSlice } = require("@reduxjs/toolkit");

let initialState = [];
const initStateStr = localStorage.getItem("cart");
if (initStateStr) {
  const initCart = JSON.parse(initStateStr);
  initialState = [...initCart];
} else {
  localStorage.setItem("cart", JSON.stringify([]));
}

const Cart = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify([...state]));
    },
  },
});

export const { addToCart } = Cart.actions;
export const cartReducer = Cart.reducer;
