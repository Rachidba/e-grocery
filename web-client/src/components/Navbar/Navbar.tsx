import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import navbarStyle from './NavbarStyle';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useLocation, useHistory } from 'react-router-dom';

const Navbar: React.FC = () => {
  const classes = navbarStyle();
  const location = useLocation();
  const history = useHistory();
  const numberOfProductInCart: number = useSelector(
    (state: RootState) => state.shoppingCart.shoppingCartItems.length,
  );
  function renderWithCard() {
    return (
      <>
        <div className={classes.menu}>
          <MenuIcon color="primary" style={{ fontSize: 35 }} />
        </div>
        <Link to={'/shopping-cart'}>
          <div className={classes.shoppingCart}>
            <ShoppingCartIcon color="primary" style={{ fontSize: 35 }} />
            <span className={classes.cartBasket}>{numberOfProductInCart}</span>
          </div>
        </Link>
      </>
    );
  }
  const goToPreviousPath = () => {
    history.goBack();
  };
  function renderWithBackArrow() {
    return (
      <IconButton
        aria-label="back"
        onClick={goToPreviousPath}
        className={classes.backText}
      >
        <ArrowBackIcon />
        Produits
      </IconButton>
    );
  }
  return (
    <nav className={classes.navbar}>
      {location.pathname.includes('cart')
        ? renderWithBackArrow()
        : renderWithCard()}
    </nav>
  );
};

export default Navbar;
