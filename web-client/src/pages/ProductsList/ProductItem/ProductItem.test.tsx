import React from 'react';
import ProductItem from './ProductItem';
import products from '../../../services/mockProducts';
import configureStore from '../../../store/configureStore';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

function render() {
  const store = configureStore();
  return mount(
    <Provider store={store}>
      <ProductItem product={products[0]} />
    </Provider>,
  );
}
it('Should render ProductItem with price', () => {
  const productPrice = render().text();
  expect(productPrice).toContain(products[0].price);
});
it('Should render ProductItem with title', () => {
  const procutTitle = render().find('.makeStyles-title-6').text();
  expect(procutTitle).toContain(products[0].title.substr(0, 20));
});
