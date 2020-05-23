import api from "./api";

export default function me(id, token) {
  const options = {
    headers: { "x-auth-token": token },
  };
  return api.get(`/profile/${id}`, options);
}
