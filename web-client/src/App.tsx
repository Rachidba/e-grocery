import React, { useEffect } from 'react';
import Theme, { backgroundColor } from './Theme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import CategoriesList from './pages/CategoriesList/CategoriesList';
import NotFound from './pages/NotFound/NotFound';
import SubcategoriesList from './pages/SubcategoriesList/SubcategoriesList';
import ProductsList from './pages/ProductsList/ProductsList';
import { Container } from '@material-ui/core';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import {
  LoadCartItemFromLocalStorage,
  SaveCartItemsToLocalStorage,
} from './store/shoppingCart/actions';
import { useDispatch } from 'react-redux';
import NearbyShopsList from './pages/NearbyShopsList/NearbyShopsList';

const useStyles = makeStyles({
  app: {
    margin: 0,
    padding: 0,
    paddingTop: '50px',
    backgroundColor: backgroundColor,
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  window.onbeforeunload = () => {
    dispatch(SaveCartItemsToLocalStorage());
  };
  useEffect(() => {
    dispatch(LoadCartItemFromLocalStorage());
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Container className={classes.app}>
        <Switch>
          <Route exact path="/" component={CategoriesList} />
          <Route path="/categories" component={CategoriesList} />
          <Route
            path="/subcategories/:categoryId"
            component={SubcategoriesList}
          />
          <Route path="/products/:subcategoryId" component={ProductsList} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/nearby-shops" component={NearbyShopsList} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
