const express = require("express");
const app = express();
const logger = require("./startup/logger");
const path = require("path");

require("./startup/cors")(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./startup/routes")(app);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "client/public")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

require("./startup/db")();
require("./startup/config");
require("./startup/prod")(app);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  logger.log.info(`Starting application on port ${port}`);
});

module.exports = server;
