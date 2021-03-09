import React from 'react';
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
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const useStyles = makeStyles({
  app: {
    margin: 0,
    padding: 0,
    paddingTop: '50px',
    backgroundColor: backgroundColor,
  },
});

const trackingId: string =
  process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID ?? '';
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);
const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App: React.FC = () => {
  const classes = useStyles();
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
          <Route component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
