import axios from "axios";
export const apiAxiosApp = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
});
