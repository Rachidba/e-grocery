import React from 'react';
import './App.css';
import Theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import ProductsList from './pages/ProductsList/ProductsList';
import products from './services/mockProducts';

const App: React.FC = () => {
  const productsList = products;
  return (
    <ThemeProvider theme={Theme}>
      <ProductsList products={productsList} />
    </ThemeProvider>
  );
};

export default App;
