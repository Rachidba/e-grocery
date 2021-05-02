import * as React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import restProvider from "ra-data-simple-rest";
import authProvider from "./authProvider";

import ShopList from "./components/ShopList";
import ShopCreation from "./components/ShopCreation";

interface fetchUtilsResponse {
  status: number;
  headers: Headers;
  body: string;
  json: any;
}

const httpClient = (
  url: string,
  options: fetchUtils.Options = {}
): Promise<fetchUtilsResponse> => {
  options.headers = new Headers({ Accept: "application/json" });

  if ("auth" in localStorage) {
    const { token } = JSON.parse(localStorage.getItem("auth") as string);
    options.headers.set("Authorization", `Bearer ${token}`);
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = restProvider("http://localhost:8080/api", httpClient);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="sellers" list={ShopList} create={ShopCreation} />
  </Admin>
);

export default App;
