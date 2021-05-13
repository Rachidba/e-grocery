import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { ShopWithSelection } from '../../store/types';
const mapStyles = {
  width: '90%',
  height: '60%',
};

export class MapContainer extends Component<any, any> {
  render() {
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        zoom={18}
        initialCenter={{
          lat: 33.58026,
          lng: -7.63022,
        }}
      >
        {this.props.shopsWithSelection.map(
          (shopWithSelection: ShopWithSelection) => (
            <Marker
              key={shopWithSelection.shop.id}
              position={{
                lat: shopWithSelection.shop.geom.latitude,
                lng: shopWithSelection.shop.geom.longitude,
              }}
              title={shopWithSelection.shop.name}
              onClick={() =>
                this.props.updateSelected(shopWithSelection.shop.id)
              }
            />
          ),
        )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDfk8nYeFhz51i4rGNlYi7d7UbdhFaHEoI',
})(MapContainer);
