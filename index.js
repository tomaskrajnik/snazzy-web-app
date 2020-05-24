const express = require("express");
const app = express();
const logger = require("./startup/logger");
const Airbrake = require("@airbrake/node");
const path = require("path");

new Airbrake.Notifier({
  projectId: 274270,
  projectKey: "4830ba04a44285a222e351b2ceab91c5",
  environment: "production",
});

require("./startup/cors")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "./client/public")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config");
require("./startup/prod")(app);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  // throw new Error("I am an uncaught exception");
  logger.log.info(`Starting application on port ${port}`);
});

module.exports = server;
