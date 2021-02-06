export interface Product {
  id: number;
  title: string;
  description: string;
  unity: string;
  price: number;
  imgUrl: string;
}

export const emptyProduct = {
  id: -1,
  title: '',
  description: '',
  unity: '',
  price: 0,
  imgUrl: '',
};

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
