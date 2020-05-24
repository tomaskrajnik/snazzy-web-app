const express = require("express");
const app = express();
const logger = require("./startup/logger");
const router = require("express").Router();

const register = require("./routes/register");
// const login = require("./routes/login");
// const profile = require("./routes/profile");
// const plans = require("./routes/plans");
const path = require("path");

require("./startup/cors")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ADD THIS LINE
app.use(express.static("client/build"));

app.use("/register", register);
// router.use("/api/login", login);
// router.use("/api/profile", profile);
// router.use("/api/plans", plans);
// require("./startup/routes")(app);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
require("./startup/db")();
require("./startup/config");
require("./startup/prod")(app);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  logger.log.info(`Starting application on port ${port}`);
});

// const path = require("path");
// if (process.env.NODE_ENV === "production") {
//   console.log("smth");
//   app.use("*", express.static(path.join(__dirname, "client", "build")));
// }

module.exports = server;
