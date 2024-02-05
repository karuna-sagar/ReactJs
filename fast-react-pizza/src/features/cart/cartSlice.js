import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "Paneer Pizza",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {},
    deleteItem(state, action) {},
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearItem(state, action) {},
  },
});
