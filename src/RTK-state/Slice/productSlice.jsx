const { createSlice } = require("@reduxjs/toolkit");

const Cart = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log(state, action.payload);
      state.push(action.payload);
    },
  },
});

export const { addToCart } = Cart.actions;
export const cartReducer = Cart.reducer;
