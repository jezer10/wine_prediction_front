import axios from "axios";
export const domain = `144.22.56.92:5000`;
export const baseURL = `http://${domain}`;

export const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
