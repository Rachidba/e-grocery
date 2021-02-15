import {
  Card,
  CardContent,
  makeStyles,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import React, { useState } from 'react';
import { ShoppingCartItem as CartItem } from '../../../store/shoppingCart/types';
import { borderRadius, primaryColor } from '../../../Theme';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {
  DecrementProductQuantity,
  IncrementProductQuantity,
  removeProductFromCart,
} from '../../../store/shoppingCart/actions';
import { useDispatch } from 'react-redux';

interface Props {
  shoppingCartItem: CartItem;
}
// eslint-disable-next-line max-lines-per-function
const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flex: '25% auto',
    height: '80px',
  },
  cover: {
    width: '20%',
  },
  details: {
    width: '100%',
    display: 'flex',
    flex: '3fr 1fr',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0',
    paddingTop: '3px',
    whiteSpace: 'nowrap',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  controlItems: {
    width: '25px',
    height: '25px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: borderRadius,
    borderColor: primaryColor,
    padding: 0,
    textAlign: 'center',
  },
  button: {
    backgroundColor: primaryColor,
  },
  controls: {
    paddingTop: '10px',
    display: 'flex',
    flex: '1 1 1 3',
    alignItems: 'center',
    columnGap: '2px',
  },
  unitaryPrice: {
    paddingLeft: '5px',
    fontSize: '12px',
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
}));
// eslint-disable-next-line max-lines-per-function
const ShoppingCartItem: React.FC<Props> = ({ shoppingCartItem }) => {
  const classes = useStyle();
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
          <span className={classes.title}>
            {shoppingCartItem.product.title.length > 25
              ? shoppingCartItem.product.title.substring(0, 25).concat('...')
              : shoppingCartItem.product.title}
          </span>
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
              x {shoppingCartItem.product.price.toFixed(2)} DH
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
