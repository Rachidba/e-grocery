import React from 'react';
import { Category } from '../../../store/types';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {
  category: Category;
}
const useStyle = makeStyles(() => ({
  categoryCard: {
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
  },
}));

const CategoryItem: React.FC<Props> = ({ category }) => {
  const classes = useStyle();
  return (
    <Link to={'/subcategories/' + category.id}>
      <Card className={classes.categoryCard}>
        <CardContent>{category.categoryName}</CardContent>
      </Card>
    </Link>
  );
};

export default CategoryItem;
