import { isTemplateExpression } from 'typescript';
import { Product } from '../types';
import {
  ShoppingCartState,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ShoppingCartActionTypes,
  INCREMENT_PRODUCT_QUNATITY,
  ShoppingCartItem,
  DECREMENT_PRODUCT_QUNATITY,
} from './types';

const initialState: ShoppingCartState = {
  shoppingCartItems: [],
};

export function shoppingCartReducer(
  state = initialState,
  action: ShoppingCartActionTypes,
): ShoppingCartState {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return addProduct(state.shoppingCartItems, action.payload);
    case REMOVE_PRODUCT_FROM_CART:
      return removeProduct(state.shoppingCartItems, action.payload);
    case INCREMENT_PRODUCT_QUNATITY:
      return incrementProduct(state.shoppingCartItems, action.payload);
    case DECREMENT_PRODUCT_QUNATITY:
      return decrementProduct(state.shoppingCartItems, action.payload);
    default:
      return state;
  }
}
function addProduct(shoppingCartItems: ShoppingCartItem[], product: Product) {
  if (shoppingCartItems.filter((p) => p.product.id === product.id).length > 0)
    return { shoppingCartItems: shoppingCartItems };
  return {
    shoppingCartItems: [
      ...shoppingCartItems,
      { product: product, quantity: 1 },
    ],
  };
}
function removeProduct(
  shoppingCartItems: ShoppingCartItem[],
  productId: number,
) {
  return {
    shoppingCartItems: shoppingCartItems.filter(
      (item) => item.product.id != productId,
    ),
  };
}
function incrementProduct(
  shoppingCartItems: ShoppingCartItem[],
  productId: number,
) {
  const newCart = shoppingCartItems.map((item) => {
    if (item.product.id == productId)
      return { ...item, quantity: item.quantity + 1 };
    return item;
  });
  return { shoppingCartItems: newCart };
}
function decrementProduct(
  shoppingCartItems: ShoppingCartItem[],
  productId: number,
) {
  const newCart = shoppingCartItems
    .map((item) => {
      if (item.product.id == productId)
        return { ...item, quantity: item.quantity - 1 };
      return item;
    })
    .filter((item) => item.quantity >= 1);
  return { shoppingCartItems: newCart };
}
