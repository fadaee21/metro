import axios from "axios";
export const apiAxiosApp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});
