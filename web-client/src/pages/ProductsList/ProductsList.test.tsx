import React from 'react';
import ProductsList from './ProductsList';
import products from '../../services/mockProducts';
import configureStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

function render() {
  const store = configureStore();
  return mount(
    <Provider store={store}>
      <ProductsList products={products} />
    </Provider>,
  );
}
it('Should render ProductItem with price', () => {
  const productItemCount = render().find('ProductItem').length;
  expect(productItemCount).toBe(6);
});
