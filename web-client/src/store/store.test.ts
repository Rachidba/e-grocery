import configureStore from './configureStore';
import * as shoppingCartActions from './shoppingCart/actions';
import products from '../services/mockProducts';
import { ShoppingCartSharp } from '@material-ui/icons';

it('Should handle add product to shopping cart', () => {
  const store = configureStore();
  const product = products[0];

  const action = shoppingCartActions.addProductToCart(product);
  store.dispatch(action);

  const addedItem = store.getState().shoppingCart.shoppingCartItems[0];
  expect(addedItem.product.title).toEqual(product.title);
  expect(addedItem.quantity).toEqual(1);
});

it('Should not add product to shopping cart, when product aleady exists', () => {
  const store = configureStore();
  const product = products[0];

  const action = shoppingCartActions.addProductToCart(product);
  store.dispatch(action);
  store.dispatch(action);

  const shoppingCartItems = store.getState().shoppingCart.shoppingCartItems;
  expect(shoppingCartItems.length).toEqual(1);
  expect(shoppingCartItems[0].product.title).toEqual(product.title);
  expect(shoppingCartItems[0].quantity).toEqual(1);
});
