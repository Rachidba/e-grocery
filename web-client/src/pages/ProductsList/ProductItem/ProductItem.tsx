import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Product } from '../../../types/Product';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

interface Props {
  product: Product;
}
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flex: '25% auto',
  },
  cover: {
    width: '30%',
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0',
    whiteSpace: 'nowrap',
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0px 6px 6px 15px',
  },
  title: {
    fontWeight: 'bold',
  },
  unity: {
    color: 'grey',
    paddingTop: '10px',
  },
}));

const ProductItem: React.FC<Props> = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={product.imgUrl}
        title="Product image"
      ></CardMedia>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <span className={classes.title}>
            {product.title.length > 25
              ? product.title.substring(0, 25).concat('...')
              : product.title}
          </span>
          <div className={classes.unity}>Unité: {product.unity}</div>
        </CardContent>
        <div className={classes.controls}>
          <Typography variant="subtitle1" color="primary">
            <b>{product.price} DH</b>
          </Typography>
          <Button endIcon={<AddShoppingCartIcon />}>Acheter</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
