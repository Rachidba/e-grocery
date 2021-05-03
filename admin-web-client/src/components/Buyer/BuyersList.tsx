import React from "react";
import { List, Datagrid, TextField, BooleanField } from "react-admin";

const BuyersList: React.FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="fullName" />
        <TextField source="phoneNumber" />
        <TextField source="cityName" />
        <TextField source="homeLocationGeom" />
        <BooleanField source="accountEnabled" />
      </Datagrid>
    </List>
  );
};

export default BuyersList;
