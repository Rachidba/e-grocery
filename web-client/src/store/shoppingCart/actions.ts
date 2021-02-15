import { Product } from './../types';
import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_PRODUCT_QUNATITY,
  INCREMENT_PRODUCT_QUNATITY,
  REMOVE_PRODUCT_FROM_CART,
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

export function IncrementProductQuantity(productId: number) {
  return { type: INCREMENT_PRODUCT_QUNATITY, payload: productId };
}

export function DecrementProductQuantity(productId: number) {
  return { type: DECREMENT_PRODUCT_QUNATITY, payload: productId };
}
