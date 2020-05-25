const logger = require("./../startup/logger");
module.exports = function (err, req, res, next) {
  console.log(err.message, err);
  logger.log.error(err.message, err);
  res.status(500).send("Something went wrong.");
};
