import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services/apiMock';
import { Category } from '../../store/types';
import { backgroundColor } from '../../Theme';
import CategoryItem from './CategoryItem/CategoryItem';

const useStyle = makeStyles(() => ({
  categories: {
    marginTop: '65px',
    display: 'grid',
    rowGap: '5px',
    backgroundColor: backgroundColor,
    height: '100vh',
    gridColumnStart: 'auto',
    alignContent: 'start',
  },
}));

const CategoriesList: React.FC = () => {
  const classes = useStyle();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const categories = getCategories();
    if (categories instanceof Array) {
      setCategories(categories);
    }
  }, []);
  return (
    <div className={classes.categories}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
