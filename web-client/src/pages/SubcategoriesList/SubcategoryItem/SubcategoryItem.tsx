import React from 'react';
import { Subcategory } from '../../../store/types';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {
  subcategory: Subcategory;
}
const useStyle = makeStyles(() => ({
  subcategoryCard: {
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
  },
}));

const SubcategoryItem: React.FC<Props> = ({ subcategory }) => {
  const classes = useStyle();
  return (
    <Link to={'/products/' + subcategory.id}>
      <Card className={classes.subcategoryCard}>
        <CardContent>{subcategory.subcategoryName}</CardContent>
      </Card>
    </Link>
  );
};

export default SubcategoryItem;
