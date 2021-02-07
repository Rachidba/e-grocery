import { shoppingCartReducer } from './reducer';
import * as actions from './actions';
import products from '../../services/mockProducts';

it('Should add product to cart when ADD_PRODUCT_TO_CART', () => {
  const initialState = {
    shoppingCartItems: [
      {
        product: products[0],
        quantity: 1,
      },
      {
        product: products[1],
        quantity: 3,
      },
    ],
  };

  const newProduct = products[3];

  const action = actions.addProductToCart(newProduct);

  const newState = shoppingCartReducer(initialState, action);

  expect(newState.shoppingCartItems.length).toBe(3);
  expect(newState.shoppingCartItems[0].product.title).toEqual(
    products[0].title,
  );
  expect(newState.shoppingCartItems[0].quantity).toEqual(1);
  expect(newState.shoppingCartItems[1].product.title).toEqual(
    products[1].title,
  );
  expect(newState.shoppingCartItems[1].quantity).toEqual(3);
  expect(newState.shoppingCartItems[2].product.title).toEqual(
    products[3].title,
  );
  expect(newState.shoppingCartItems[2].quantity).toEqual(1);
});
