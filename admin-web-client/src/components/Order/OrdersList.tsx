import React from "react";
import { List, Datagrid, TextField } from "react-admin";

const OrdersList: React.FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="totalPrice" />
        <TextField source="buyerId" />
        <TextField source="sellerId" />
        <TextField source="shopId" />
        <TextField source="shopName" />
        <TextField source="city" />
        <TextField source="shopLocation" />
        <TextField source="deliveryLocationGeom" />
        <TextField source="createdDate" />
      </Datagrid>
    </List>
  );
};

export default OrdersList;
