import React from "react";
import { List, Datagrid, TextField, DateField, EditButton } from "react-admin";

const ShopList: React.FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="shopName" />
        <TextField source="fullName" />
        <TextField source="phoneNumber" />
        <TextField source="cityName" />
        <TextField source="shopLocation" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
