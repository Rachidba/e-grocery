import {
  ShoppingCartState,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ShoppingCartActionTypes,
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
      if (
        state.shoppingCartItems.filter(
          (p) => p.product.id === action.payload.id,
        ).length > 0
      )
        return state;
      return {
        shoppingCartItems: [
          ...state.shoppingCartItems,
          { product: action.payload, quantity: 0 },
        ],
      };
    case REMOVE_PRODUCT_FROM_CART:
      return state;
    default:
      return state;
  }
}
