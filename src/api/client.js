import axios from "axios";
export const testDomain = `localhost:5000`;
export const productionDomain = `144.22.56.92:5000`;
export const baseURL = `http://${productionDomain}`;

export const client = axios.create({
  baseURL,

});
