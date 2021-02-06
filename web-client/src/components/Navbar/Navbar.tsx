import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import navbarStyle from './NavbarStyle';

const Navbar: React.FC = () => {
  const classes = navbarStyle();
  const numberOfProductInCart: number = useSelector(
    (state: RootState) => state.shoppingCart.shoppingCartItems.length,
  );
  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <MenuIcon color="primary" style={{ fontSize: 35 }} />
      </div>
      <div className={classes.shoppingCart}>
        <ShoppingCartIcon color="primary" style={{ fontSize: 35 }} />
        <span className={classes.cartBasket}>{numberOfProductInCart}</span>
      </div>
    </nav>
  );
};

export default Navbar;
