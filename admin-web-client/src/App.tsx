import * as React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

import ShopList from "./components/ShopList";
import ShopCreation from "./components/ShopCreation";

const App = () => (
  <Admin dataProvider={restProvider("http://localhost:8080/api")}>
    <Resource name="shops" list={ShopList} create={ShopCreation} />
  </Admin>
);

export default App;
