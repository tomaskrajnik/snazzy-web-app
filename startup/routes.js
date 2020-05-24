const express = require("express");
const error = require("./../middleware/error");
// const register = require("./../routes/register");
// const login = require("./../routes/login");
// const profile = require("./../routes/profile");
// const plans = require("./../routes/plans");
const path = require("path");

module.exports = function (app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("./../client/build"));
    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "./../client/build/index.html"));
    });
  } else {
    app.use(express.static(path.join(__dirname, "./.../client/public")));
    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "./../client/public/index.html"));
    });
  }

  // app.use("/api/register", register);
  // app.use("/api/login", login);
  // app.use("/api/profile", profile);
  // app.use("/api/plans", plans);

  app.use(error);

  // const path = require("path");
};
