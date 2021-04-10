import { Product } from './../types';
import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_QUNATITY,
  INCREMENT_PRODUCT_QUNATITY,
  LOAD_CART_FROM_LOCAL_STORAGE,
  REMOVE_PRODUCT_FROM_CART,
  SAVE_CART_TO_LOCAL_STORAGE,
  ShoppingCartActionTypes,
} from './types';

export function addProductToCart(product: Product): ShoppingCartActionTypes {
  return { type: ADD_PRODUCT_TO_CART, payload: product };
}

export function removeProductFromCart(
  productId: number,
): ShoppingCartActionTypes {
  return { type: REMOVE_PRODUCT_FROM_CART, payload: productId };
}

export function IncrementProductQuantity(
  productId: number,
): ShoppingCartActionTypes {
  return { type: INCREMENT_PRODUCT_QUNATITY, payload: productId };
}

export function DecrementProductQuantity(
  productId: number,
): ShoppingCartActionTypes {
  return { type: DECREMENT_PRODUCT_QUNATITY, payload: productId };
}

export function SaveCartItemsToLocalStorage(): ShoppingCartActionTypes {
  return { type: SAVE_CART_TO_LOCAL_STORAGE };
}

export function LoadCartItemFromLocalStorage(): ShoppingCartActionTypes {
  return { type: LOAD_CART_FROM_LOCAL_STORAGE };
}
