import { AuthProvider } from "ra-core";
import axios from "axios";

interface Login {
  username: string;
  password: string;
}

const authProvider: AuthProvider = {
  login: ({ username, password }: Login): Promise<void> => {
    return axios
      .post(
        `http://localhost:8080/api/auth/login`,
        JSON.stringify({ phoneNumber: username, password }),
        { headers: new Headers({ "Content-Type": "application/json" }) }
      )
      .then((auth) => {
        localStorage.setItem("auth", JSON.stringify(auth.data));
        console.log(auth);
      })
      .catch(function (error) {
        throw new Error(error);
      });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject({ redirectTo: "/credentials-required" });
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("auth")
      ? Promise.resolve()
      : Promise.reject({ message: "login.required" }),
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  getPermissions: (params) => Promise.resolve(),
};

export default authProvider;
