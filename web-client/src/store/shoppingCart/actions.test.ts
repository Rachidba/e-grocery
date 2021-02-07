import * as shoppingCartActions from './actions';
import * as types from './types';
import products from '../../services/mockProducts';

describe('Shopping cart actions', () => {
  it('should create a ADD_PRODUCT_TO_CART actions', () => {
    const product = products[0];
    const expectedAction = {
      type: types.ADD_PRODUCT_TO_CART,
      payload: product,
    };

    const action = shoppingCartActions.addProductToCart(product);

    expect(action).toEqual(expectedAction);
  });
});
