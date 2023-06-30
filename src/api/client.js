import axios from "axios";
export const baseURL = "http://backend:5000";

export const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
