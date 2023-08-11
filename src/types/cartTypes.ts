import { Product } from "./navTypes";

export interface CartProduct {
  product: Product;
  quantity: number;
}

export interface CartState {
  products: CartProduct[];
  total: number;
}
