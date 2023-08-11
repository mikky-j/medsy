export type Directions = "left" | "right";

type NavRoute = {
  Home: undefined;
  Product: { product: Product };
  Cart: undefined;
  Checkout: undefined;
};

export type Routes = {
  name: keyof NavRoute;
  params?: NavRoute[keyof NavRoute];
};

export interface NavContextState {
  route: Routes;
  direction: Directions;
  open: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  dosageForm: string;
  dosageTotalQuantity: number;
  dosages: string;
  activeSubstances: string[];
  manufacturer: string;
  prescriptionRequired: boolean;
}
