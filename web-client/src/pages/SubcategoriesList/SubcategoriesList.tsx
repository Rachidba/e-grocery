import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Subcategory } from '../../store/types';
import { makeStyles } from '@material-ui/core';
import { getSubcategories } from '../../services/apiMock';
import SubcategoryItem from './SubcategoryItem/SubcategoryItem';

interface Props {
  subcategories: Subcategory[];
}

const useStyle = makeStyles(() => ({
  subcategories: {
    display: 'grid',
    rowGap: '5px',
    minHeight: '100vh',
    alignContent: 'start',
  },
}));

const SubcategoriesList: React.FC<Props> = () => {
  const classes = useStyle();
  const { categoryId }: { categoryId: string } = useParams();
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  useEffect(() => {
    const subcategories = getSubcategories(Number(categoryId));
    if (subcategories instanceof Array) {
      setSubcategories(subcategories);
    }
  }, []);
  return (
    <div className={classes.subcategories}>
      {subcategories.map((subcategory) => (
        <SubcategoryItem key={subcategory.id} subcategory={subcategory} />
      ))}
    </div>
  );
};

export default SubcategoriesList;
