import React from 'react';
import { ShopWithSelection } from '../../../store/types';
import { makeStyles } from '@material-ui/core';
import { borderRadius, primaryColor } from '../../../Theme';

interface Props {
  shopWithSelection: ShopWithSelection;
  updateSelected(shopId: number): void;
}
const useStyle = makeStyles(() => ({
  directionContainer: {
    display: 'flex',
  },
  card: {
    width: '70%',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: borderRadius,
    padding: '15px 30px 15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginLeft: '8%',
  },
  selectable: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: primaryColor,
    color: primaryColor,
  },
  selected: {
    borderWidth: '1px',
    borderStyle: 'solid',
    color: 'white',
    backgroundColor: primaryColor,
  },
}));

const NearbyShopsItem: React.FC<Props> = ({
  shopWithSelection,
  updateSelected,
}) => {
  const classes = useStyle();
  return (
    <div
      className={[
        classes.card,
        shopWithSelection.isSelected ? classes.selected : classes.selectable,
      ].join(' ')}
      onClick={() => updateSelected(shopWithSelection.shop.id)}
    >
      <div>{shopWithSelection.shop.name}</div>
      <div className={classes.directionContainer}>
        <span>{shopWithSelection.shop.distance} m </span>
        {/* <DirectionsIcon /> */}
      </div>
    </div>
  );
};

export default NearbyShopsItem;
