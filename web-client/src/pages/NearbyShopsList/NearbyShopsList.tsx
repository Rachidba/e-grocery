import { makeStyles, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getShops } from '../../services/apiMock';
import { ShopWithSelection } from '../../store/types';
import NearbyShopsItem from './NearbyShopsItem/NearbyShopsItem';

const useStyle = makeStyles(() => ({
  shops: {
    display: 'grid',
    rowGap: '5px',
    minHeight: '100vh',
    alignContent: 'start',
    alignItems: 'center',
  },
  orderButtonContainer: {
    marginTop: '10px',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  orderButton: {
    padding: '10px',
    width: '98%',
  },
  title: {
    textAlign: 'center',
  },
}));

const NearbyShopsList: React.FC = () => {
  const classes = useStyle();
  const [shopsWithSelection, setShopsWithSelection] = useState<
    ShopWithSelection[]
  >([]);
  const [updated, setUpdated] = useState<boolean>(false);
  function updateSelected(shopId: number) {
    shopsWithSelection.forEach((element) => {
      if (element.shop.id == shopId) element.isSelected = true;
      else element.isSelected = false;
    });
    setShopsWithSelection(shopsWithSelection);
    setUpdated(!updated);
  }
  useEffect(() => {
    return;
  }, [updated]);

  useEffect(() => {
    const shops = getShops();
    if (shops instanceof Array) {
      const shopsWithSelect = shops.map((shop) => ({
        shop: shop,
        isSelected: false,
      }));
      shopsWithSelect[0].isSelected = true;
      setShopsWithSelection(shopsWithSelect);
    }
  }, []);

  return (
    <>
      <div className={classes.title}>
        <h3>Choisissez l epecier</h3>
      </div>
      <div className={classes.shops}>
        {shopsWithSelection.map((shop) => (
          <NearbyShopsItem
            key={shop.shop.id}
            shopWithSelection={shop}
            updateSelected={updateSelected}
          />
        ))}
        <div className={classes.orderButtonContainer}>
          <Button className={classes.orderButton}>Passer la commande</Button>
        </div>
      </div>
    </>
  );
};

export default NearbyShopsList;
