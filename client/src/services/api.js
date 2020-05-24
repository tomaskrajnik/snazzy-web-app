import axios from "axios";

const configHeaders = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers":
    "x-requested-with, authorization, content-type",
  "Access-Control-Expose-Headers": "x-auth-token",
};

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: configHeaders,
});

export default api;
