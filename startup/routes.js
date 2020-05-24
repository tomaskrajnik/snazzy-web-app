const express = require("express");
const error = require("./../middleware/error");
const register = require("../routes/register");
const login = require("./../routes/login");
const profile = require("./../routes/profile");
const plans = require("./../routes/plans");

module.exports = function (app) {
  app.use(error);
};
