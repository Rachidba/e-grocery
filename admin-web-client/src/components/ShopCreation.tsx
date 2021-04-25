import React from "react";
import {
  Create,
  SimpleForm,
  TextField,
  DateField,
  EditButton,
  TextInput,
} from "react-admin";

const ShopCreation: React.FC = (props) => {
  return (
    <Create title="Create new Shop" {...props}>
      <SimpleForm>
        <TextInput source="shoneNumber" />
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
};

export default ShopCreation;
