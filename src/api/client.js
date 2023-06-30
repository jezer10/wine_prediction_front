import axios from "axios";
export const baseURL = "http://144.22.56.92:5000";

export const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
