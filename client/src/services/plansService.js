import api from "./api";

export default function plans() {
  return api.get("/plans");
}
