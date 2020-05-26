const path = require("path");
const express = require("express");

module.exports = function (app) {
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "./../client/build/index.html"));
    });
  } else {
    app.use(express.static(path.join(__dirname, "client/public")));
    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "./../client/pulic/"));
    });
  }
};
