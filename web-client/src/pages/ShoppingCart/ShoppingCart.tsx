import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';
import { ShoppingCartItem as CartItem } from './../../store/shoppingCart/types';
import { Button, makeStyles } from '@material-ui/core';
import { backgroundColor } from '../../Theme';
import { useHistory } from 'react-router-dom';
import { getMyLocation } from '../../services/locationService';

const useStyle = makeStyles(() => ({
  root: {
    minHeight: '100vh',
  },
  cartItems: {
    backgroundColor: backgroundColor,
    display: 'grid',
    gap: '5px',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '25px 10px 25px 10px',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  orderButtonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  orderButton: {
    padding: '10px',
    width: '98%',
  },
}));

const ShoppingCart: React.FC = () => {
  const classes = useStyle();
  const history = useHistory();
  const shoppingCartItems: CartItem[] = useSelector(
    (state: RootState) => state.shoppingCart.shoppingCartItems,
  );
  async function handleClick() {
    try {
      const location = await getMyLocation();
      history.push(
        '/nearby-shops?location=longitude' +
          location.longitude +
          '&latitude=' +
          location.latitude,
      );
    } catch (error) {
      alert(error);
    }
  }
  function totalPrice(): number {
    let total = 0;
    shoppingCartItems.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  }
  return (
    <div className={classes.root}>
      <div className={classes.cartItems}>
        {shoppingCartItems.map((item) => (
          <ShoppingCartItem key={item.product.id} shoppingCartItem={item} />
        ))}
      </div>
      <div className={classes.total}>
        <div>Prix totale</div>
        <div>{totalPrice().toFixed(2)} DH</div>
      </div>
      <div className={classes.orderButtonContainer}>
        <Button className={classes.orderButton} onClick={() => handleClick()}>
          Choisir l epicier
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
