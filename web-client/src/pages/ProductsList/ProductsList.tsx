import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem/ProductItem';
import { makeStyles } from '@material-ui/core';
import { Product } from '../../store/types';
import { getProductsBySubcategory } from '../../services/apiMock';
import CategoriesBar from './CategoriesBar/CategoriesBar';

const useStyles = makeStyles({
  productsGrid: {
    display: 'grid',
    gap: '5px',
    margin: '5px',
    minHeight: '100vh',
    alignContent: 'start',
  },
});
const ProductsList: React.FC = () => {
  const classes = useStyles();
  const { subcategoryId }: { subcategoryId: string } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const subcategories = getProductsBySubcategory(Number(subcategoryId));
    if (subcategories instanceof Array) {
      setProducts(subcategories);
    }
  }, []);
  return (
    <>
      <CategoriesBar />
      <div className={classes.productsGrid}>
        {products.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
