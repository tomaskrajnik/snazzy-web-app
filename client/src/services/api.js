import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Origin": "Origin",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers":
      "x-requested-with, authorization, content-type, Origin",
    "Access-Control-Expose-Headers": "x-auth-token",
  },
});

export default api;
