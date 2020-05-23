const path = require("path");
const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

const logPath = "";

const log = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: path.join(logPath, "logfile.log"),
    }),
    new winston.transports.File({
      filename: path.join(logPath, "error.log"),
      handleExceptions: true,
      level: "error",
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  log.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    })
  );
  log.add(
    new winston.transports.Console({
      level: "error",
      handleExceptions: true,
      exitOnError: true,
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    })
  );
}

process.on("unhandledRejection", (ex) => {
  throw ex;
});

module.exports = {
  log: log,
};
