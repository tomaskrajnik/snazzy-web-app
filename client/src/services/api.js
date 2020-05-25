import axios from "axios";

const api = axios.create({
  baseURL: "/api/",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:5000",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers":
      "x-requested-with, authorization, content-type",
    "Access-Control-Expose-Headers":
      "x-auth-token, Access-Control-Allow-Origin",
  },
});

export default api;
