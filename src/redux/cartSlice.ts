import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/navTypes";
import { CartState } from "../types/cartTypes";

const initialState: CartState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (p) => p.product.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      }
      state.total += product.price;
    },
    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (p) => p.product.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity--;
        if (existingProduct.quantity === 0) {
          state.products = state.products.filter(
            (p) => p.product.id !== product.id
          );
        }
        state.total -= product.price;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (p) => p.product.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ product, quantity: 1 });
      }
      state.total += product.price;
    },
    removeCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (p) => p.product.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity--;
        if (existingProduct.quantity === 0) {
          state.products = state.products.filter(
            (p) => p.product.id !== product.id
          );
        }
        state.total -= product.price;
      }
    },
  },
});

export const {
  addToCart,
  removeCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
