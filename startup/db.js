const config = require("config");
const mongoose = require("mongoose");
const logger = require("./../startup/logger");

module.exports = function () {
  // const db = process.env.SNAZZY_DB || "mongodb://localhost/snazzy";
  const db = process.env.MONGODB_URI || "mongodb://localhost/snazzy";

  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => logger.log.info(`Connected to database - ${db}...`));
};
