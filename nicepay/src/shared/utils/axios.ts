import axios from "axios";

export const APP_API = "http://138.124.52.41:8040/payments/";

export const httpApi = axios.create({
  baseURL: APP_API,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json; charset=utf-8",
    // contentType: "application/json; charset=utf-8",
  },
  withCredentials: false,
  timeout: 10000,
});
