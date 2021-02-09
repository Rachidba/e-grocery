import React from 'react';
import ProductsList from './ProductsList';
import configureStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ReactRouter from 'react-router';

function render() {
  const store = configureStore();
  return mount(
    <Provider store={store}>
      <ProductsList />
    </Provider>,
  );
}

it('Should render Products', () => {
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ subcategoryId: '1' });
  const productItemCount = render().find('ProductItem').length;
  expect(productItemCount).toBe(1);
});
