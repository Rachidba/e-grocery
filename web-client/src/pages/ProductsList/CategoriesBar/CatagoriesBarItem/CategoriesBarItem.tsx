import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Category } from '../../../../store/types';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme: Theme) => ({
  category: {
    display: 'grid',
    justifyItems: 'center',
    height: '80px',
  },
  categoryName: {
    fontSize: '12px',
    wordWrap: 'break-word',
    width: '60px',
    height: '2em',
    lineHeight: '1em',
    textAlign: 'center',
    overflow: 'hidden',
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));
interface Props {
  category: Category;
}
const CategoriesBarItem: React.FC<Props> = ({ category }) => {
  const classes = useStyle();
  return (
    <Link to={'/subcategories/' + category.id}>
      <div className={classes.category}>
        <Avatar
          src="http://via.placeholder.com/640x360"
          className={classes.large}
        />
        <div className={classes.categoryName}>{category.categoryName}</div>
      </div>
    </Link>
  );
};

export default CategoriesBarItem;
