import React from "react";
import {
  Create,
  SimpleForm,
  PasswordInput,
  NumberInput,
  TextField,
  DateField,
  EditButton,
  TextInput,
} from "react-admin";

const ShopCreation: React.FC = (props) => {
  return (
    <Create title="Create new Shop" {...props}>
      <SimpleForm>
        <TextInput source="phoneNumber" />
        <PasswordInput source="password" />
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="shopName" />
        <TextInput source="description" />
        <NumberInput source="cityId" />
        <TextInput source="geom" />
      </SimpleForm>
    </Create>
  );
};

export default ShopCreation;
