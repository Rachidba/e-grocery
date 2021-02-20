import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CategoriesBarItem from './CatagoriesBarItem/CategoriesBarItem';
import { Category } from '../../../store/types';
import { getCategories } from '../../../services/apiMock';

const useStyle = makeStyles(() => ({
  bar: {
    backgroundColor: 'white',
    display: 'flex',
    width: '100%',
    overflowX: 'scroll',
    overflowY: 'hidden',
    paddingTop: '4px',
    justifyContent: 'center',
  },
}));
const CategoriesBar: React.FC = () => {
  const classes = useStyle();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const categories = getCategories();
    if (categories instanceof Array) {
      setCategories(categories);
    }
  }, []);
  return (
    <div className={classes.bar}>
      {categories.map((category) => (
        <CategoriesBarItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default CategoriesBar;
