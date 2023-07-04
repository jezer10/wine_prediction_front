import axios from "axios";
export const domain = `wine-api.gns3-vm.tk`;
export const testDomain = `http://localhost:5000`;
export const productionDomain = `https://${domain}`;
export const baseURL = `${productionDomain}`;

export const client = axios.create({
  baseURL,
});
