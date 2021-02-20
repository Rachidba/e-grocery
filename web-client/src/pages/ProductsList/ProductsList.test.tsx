import React from 'react';
import ProductsList from './ProductsList';
import configureStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ReactRouter from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

function render() {
  const store = configureStore();
  return mount(
    <Router>
      <Provider store={store}>
        <ProductsList />
      </Provider>
    </Router>,
  );
}

it('Should render Products', () => {
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ subcategoryId: '1' });
  const productItemCount = render().find('ProductItem').length;
  expect(productItemCount).toBe(16);
});
