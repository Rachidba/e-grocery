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
export const INCREMENT_PRODUCT_QUNATITY = 'INCREMENT_PRODUCT_QUNATITY';
export const DECREMENT_PRODUCT_QUNATITY = 'DECREMENT_PRODUCT_QUNATITY';

interface AddProductToCartAction {
  type: typeof ADD_PRODUCT_TO_CART;
  payload: Product;
}

interface RemoveProductFromCartAction {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  payload: number;
}

interface IncrementProductQuantity {
  type: typeof INCREMENT_PRODUCT_QUNATITY;
  payload: number;
}

interface DecrementProductQuantity {
  type: typeof DECREMENT_PRODUCT_QUNATITY;
  payload: number;
}

export type ShoppingCartActionTypes =
  | AddProductToCartAction
  | RemoveProductFromCartAction
  | IncrementProductQuantity
  | DecrementProductQuantity;
