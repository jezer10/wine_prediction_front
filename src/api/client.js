import axios from "axios";
export const testDomain = `localhost:5000`;
export const productionDomain = `https://wine-api.gns3-vm.tk`;
export const baseURL = `http://${productionDomain}`;

export const client = axios.create({
  baseURL,

});
