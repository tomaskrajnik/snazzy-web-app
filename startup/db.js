const config = require("config");
const mongoose = require("mongoose");
const logger = require("./../startup/logger");

module.exports = function () {
  const db = process.env.MONGODB_URI || "mongodb://localhost/snazzy";
  console.log(db);
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => logger.log.info(`Connected to database - ${db}...`));
};
