import React from "react";
import {
  Create,
  SimpleForm,
  PasswordInput,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

const BuyerCreation: React.FC = (props) => {
  return (
    <Create title="Create new Shop" {...props}>
      <SimpleForm>
        <TextInput source="phoneNumber" />
        <PasswordInput source="password" />
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <NumberInput source="cityId" />
        <TextInput source="homeLocationGeom" />
        <BooleanInput source="accountEnabled" />
      </SimpleForm>
    </Create>
  );
};

export default BuyerCreation;
