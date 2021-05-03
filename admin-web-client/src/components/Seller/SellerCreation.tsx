import React from "react";
import {
  Create,
  SimpleForm,
  PasswordInput,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

const SellerCreation: React.FC = (props) => {
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
        <BooleanInput source="accountEnabled" />
      </SimpleForm>
    </Create>
  );
};

export default SellerCreation;
