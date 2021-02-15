import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Product } from '../../../store/types';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../store/shoppingCart/actions';
import productItemStyle from './ProductItemStyle';

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const classes = productItemStyle();
  const dispatch = useDispatch();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={product.imgUrl}
        title="Product image"
      ></CardMedia>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.title}>{product.title}</div>
          <div className={classes.unity}>{product.unity}</div>
        </CardContent>
        <div className={classes.controls}>
          <Typography variant="subtitle1" color="primary">
            <b>{product.price} DH</b>
          </Typography>
          <Button
            endIcon={<AddShoppingCartIcon />}
            onClick={() => dispatch(addProductToCart(product))}
          >
            Acheter
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
