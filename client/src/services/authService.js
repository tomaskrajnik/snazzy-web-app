import api from "./api";

export default {
  register(credentials) {
    return api.post("/register", credentials);
  },
  login(credentials) {
    return api.post("/login", credentials);
  },
  forgotPassword(credentials) {
    return api.post("/reset", credentials);
  },
  verifyRecoveryLink(token) {
    return api.get("/reset", {
      params: {
        resetPasswordToken: token,
      },
    });
  },
  updatePassword(credentials) {
    return api.put("/reset", credentials);
  },
};
