import { makeStyles, Button, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getShops } from '../../services/apiMock';
import { ShopWithSelection } from '../../store/types';
import MapContainer from './MapContainer';

const useStyle = makeStyles(() => ({
  root: {
    display: 'grid',
  },
  mapContainer: {
    minHeight: '70vh',
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
  selectedShop: {
    textAlign: 'center',
  },
}));
/* eslint-disable sonarjs/cognitive-complexity */
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
    <div className={classes.root}>
      <div className={classes.title}>
        <h3>Choisissez l epecier</h3>
      </div>
      <Container className={classes.mapContainer}>
        <MapContainer
          shopsWithSelection={shopsWithSelection}
          updateSelected={updateSelected}
        />
      </Container>
      <div className={classes.selectedShop}>
        <h3>
          {shopsWithSelection.length > 0
            ? 'Vous avez selectionner: ' +
              shopsWithSelection.filter((i) => i.isSelected)[0].shop.name
            : ''}
        </h3>
      </div>
      <div className={classes.orderButtonContainer}>
        <Button className={classes.orderButton}>Passer la commande</Button>
      </div>
    </div>
  );
};

export default NearbyShopsList;
