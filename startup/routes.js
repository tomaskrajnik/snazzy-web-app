const express = require("express");
const error = require("./../middleware/error");
const register = require("./../routes/register");
const login = require("./../routes/login");
const profile = require("./../routes/profile");
const plans = require("./../routes/plans");
const resetPassword = require("./../routes/resetPassword");

module.exports = function (app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/api/register", register);
  app.use("/api/login", login);
  app.use("/api/profile", profile);
  app.use("/api/plans", plans);
  app.use("/api/reset", resetPassword);

  app.use(error);
};
