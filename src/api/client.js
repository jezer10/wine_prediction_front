import axios from "axios";
export const baseURL = "http://localhost:5000";

export const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
