import { ShoppingCartItem } from '../store/shoppingCart/types';

export function saveShoppingCart(shoppingCartItems: ShoppingCartItem[]): void {
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartItems));
}

export function loadShoppingCart(): ShoppingCartItem[] {
  const shoppingCart = localStorage.getItem('shoppingCart');
  return shoppingCart == null ? [] : JSON.parse(shoppingCart);
}
