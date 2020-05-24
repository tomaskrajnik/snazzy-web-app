const express = require("express");
const app = express();
const logger = require("./startup/logger");

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
// require("./startup/config");
require("./startup/prod")(app);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  logger.log.info(`Starting application on port ${port}`);
});

module.exports = server;
