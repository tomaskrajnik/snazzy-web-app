const express = require("express");
const error = require("./../middleware/error");
const register = require("../routes/register");
const login = require("./../routes/login");
const profile = require("./../routes/profile");
const plans = require("./../routes/plans");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use("/api/register", register);
  app.use("/api/login", login);
  app.use("/api/profile", profile);
  app.use("/api/plans", plans);

  app.use(error);
};
