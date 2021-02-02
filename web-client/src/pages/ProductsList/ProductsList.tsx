import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import { Product } from '../../types/Product';
import { makeStyles } from '@material-ui/core';

interface Props {
  products: Product[];
}
const useStyles = makeStyles({
  productsGrid: {
    marginTop: '70px',
    display: 'grid',
    gap: '5px',
    margin: '5px',
    backgroundColor: '#F3F3F4',
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
