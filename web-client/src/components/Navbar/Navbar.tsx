import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../Theme';

const useStyles = makeStyles(() => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '12px',
    paddingBottom: '6px',
    position: 'fixed',
    width: '100%',
    overflow: 'hidden',
    top: 0,
    backgroundColor: '#F3F3F4',
    zIndex: 30,
  },
  shoppingCart: {
    paddingRight: '17px',
  },
  menu: {
    paddingLeft: '10px',
  },
  cartBasket: {
    fontSize: '.9rem',
    position: 'absolute',
    top: '4px',
    right: '15px',
    width: '18px',
    height: '18px',
    color: primaryColor,
    borderColor: primaryColor,
    borderStyle: 'solid',
    borderWidth: '0.3px',
    backgroundColor: 'white',
    borderRadius: '50%',
    textAlign: 'center',
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <MenuIcon color="primary" style={{ fontSize: 35 }} />
      </div>
      <div className={classes.shoppingCart}>
        <ShoppingCartIcon color="primary" style={{ fontSize: 35 }} />
        <span className={classes.cartBasket}>5</span>
      </div>
    </nav>
  );
};

export default Navbar;
