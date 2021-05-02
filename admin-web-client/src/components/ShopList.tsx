import React from "react";
import { List, Datagrid, TextField, DateField, EditButton } from "react-admin";

const ShopList: React.FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="profileId" />
        <TextField source="firstName" />
        <TextField source="phoneNumber" />
        <TextField source="shop.name" />
        <TextField source="shop.geom" />
        <EditButton basePath="shops" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
