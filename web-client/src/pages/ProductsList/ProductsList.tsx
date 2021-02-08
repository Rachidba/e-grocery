import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import { makeStyles } from '@material-ui/core';
import { Product } from '../../store/types';
import { backgroundColor } from '../../Theme';

interface Props {
  products: Product[];
}
const useStyles = makeStyles({
  productsGrid: {
    marginTop: '70px',
    display: 'grid',
    gap: '5px',
    margin: '5px',
    backgroundColor: backgroundColor,
  },
});
const ProductsList: React.FC<Props> = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.productsGrid}>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductsList;
