import React from 'react';
import Theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import ProductsList from './pages/ProductsList/ProductsList';
import products from './services/mockProducts';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  const productsList = products;
  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <ProductsList products={productsList} />
    </ThemeProvider>
  );
};

export default App;
