import { Product } from './../types';
export interface ShoppingCartItem {
  product: Product;
  quantity: number;
}

export interface ShoppingCartState {
  shoppingCartItems: ShoppingCartItem[];
}

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

interface AddProductToCartAction {
  type: typeof ADD_PRODUCT_TO_CART;
  payload: Product;
}

interface RemoveProductFromCartACtion {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  payload: Product;
}

export type ShoppingCartActionTypes =
  | AddProductToCartAction
  | RemoveProductFromCartACtion;
