import React from "react";
import { List, Datagrid, TextField, DateField, EditButton } from "react-admin";

const ShopList: React.FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <DateField source="createdAt" />
        <EditButton basePath="shops" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
