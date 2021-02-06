import {
  Product,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ShoppingCartActionTypes,
} from './types';

export function addProductToCart(product: Product): ShoppingCartActionTypes {
  return { type: ADD_PRODUCT_TO_CART, payload: product };
}

export function removeProductFromCart(
  product: Product,
): ShoppingCartActionTypes {
  return { type: REMOVE_PRODUCT_FROM_CART, payload: product };
}
