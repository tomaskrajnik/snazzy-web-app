const express = require("express");
const app = express();
const logger = require("./startup/logger");
const Airbrake = require("@airbrake/node");

new Airbrake.Notifier({
  projectId: 274270,
  projectKey: "4830ba04a44285a222e351b2ceab91c5",
  environment: "production",
});

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
// require("./startup/config");
require("./startup/prod")(app);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  throw new Error("I am an uncaught exception");
  logger.log.info(`Starting application on port ${port}`);
});

module.exports = server;
