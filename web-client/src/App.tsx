import React from 'react';
import Theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import CategoriesList from './pages/CategoriesList/CategoriesList';
import NotFound from './pages/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={CategoriesList} />
        <Route path="/categories" component={CategoriesList} />
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
