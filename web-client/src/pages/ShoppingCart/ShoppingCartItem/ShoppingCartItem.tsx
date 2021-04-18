import { Card, CardContent, CardMedia, IconButton } from '@material-ui/core';
import React from 'react';
import { ShoppingCartItem as CartItem } from '../../../store/shoppingCart/types';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {
  DecrementProductQuantity,
  IncrementProductQuantity,
  removeProductFromCart,
} from '../../../store/shoppingCart/actions';
import { useDispatch } from 'react-redux';
import ShoppingCartItemStyle from './ShoppingCartItemStyle';

interface Props {
  shoppingCartItem: CartItem;
}

// eslint-disable-next-line max-lines-per-function
const ShoppingCartItem: React.FC<Props> = ({ shoppingCartItem }) => {
  const classes = ShoppingCartItemStyle();
  const dispatch = useDispatch();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={shoppingCartItem.product.imgUrl}
        title="Product image"
      ></CardMedia>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.title}>{shoppingCartItem.product.title}</div>
          <div className={classes.controls}>
            <a
              className={[classes.controlItems, classes.button].join(' ')}
              onClick={() =>
                dispatch(DecrementProductQuantity(shoppingCartItem.product.id))
              }
            >
              <RemoveIcon color="secondary" />
            </a>
            <input
              type="number"
              value={shoppingCartItem.quantity}
              className={classes.controlItems}
              onChange={() => {
                return;
              }}
            />
            <a
              className={[classes.controlItems, classes.button].join(' ')}
              onClick={() =>
                dispatch(IncrementProductQuantity(shoppingCartItem.product.id))
              }
            >
              <AddIcon color="secondary" />
            </a>
            <span className={classes.unitaryPrice}>
              {' '}
              x {shoppingCartItem.product.price.toFixed(2)}
            </span>
            <span className={classes.totalPrice}>
              {' '}
              ={' '}
              {Number(
                shoppingCartItem.product.price * shoppingCartItem.quantity,
              ).toFixed(2)}{' '}
              DH
            </span>
          </div>
        </CardContent>
        <IconButton
          aria-label="delete"
          onClick={() =>
            dispatch(removeProductFromCart(shoppingCartItem.product.id))
          }
        >
          <DeleteOutlineIcon fontSize="large" />
        </IconButton>
      </div>
    </Card>
  );
};

export default ShoppingCartItem;
