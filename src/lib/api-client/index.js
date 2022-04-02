import Axios from "axios";
import entities from "./entities";

let urls = {
  test: "https://api.dilettadebellis.it/api/v1",
  development: "https://api.dilettadebellis.it/api/v1",
  production: "https://api.dilettadebellis.it/api/v1",
};

export const connection = Axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? urls.production : urls.development,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const apiClient = {
  entities,
};

export default apiClient;
