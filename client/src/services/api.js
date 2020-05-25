import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:5000/api/",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers":
      "x-requested-with, authorization, content-type",
    "Access-Control-Expose-Headers":
      "x-auth-token, Access-Control-Allow-Origin",
  },
});

export default api;
