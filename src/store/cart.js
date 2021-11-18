import { createSlice } from '@reduxjs/toolkit';

// This will allow users to keep their cart information,
// even after refreshing the page
const savedCart = window.localStorage.getItem('cart');
const parsedCart = JSON.parse(savedCart);

// Get information from localStorage OR start as an empty array
const initialState = {
  cart: parsedCart || [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[index].quantity =
          state.cart[index].quantity + action.payload.quantity;
      }
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addItem: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      state.cart[index].quantity++;
    },
    removeItem: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      state.cart[index].quantity--;
    },
  },
});

export const { addCart, removeCart, addItem, removeItem } = cart.actions;
export default cart.reducer;
export const cartSelector = (state) => state.cart;
