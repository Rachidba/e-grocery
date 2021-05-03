import React from "react";
import { List, Datagrid, TextField, BooleanField } from "react-admin";

const SellersList: React.FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="shopName" />
        <TextField source="fullName" />
        <TextField source="phoneNumber" />
        <TextField source="cityName" />
        <TextField source="shopLocation" />
        <BooleanField source="accountEnabled" />
      </Datagrid>
    </List>
  );
};

export default SellersList;
