const express = require("express");
const app = express();
const logger = require("./startup/logger");
// const error = require("./middleware/error");

// const register = require("./routes/register");
// const login = require("./routes/login");
// const profile = require("./routes/profile");
// const plans = require("./routes/plans");
const path = require("path");

require("./startup/cors")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

// app.use("api/register", register);
// app.use("/api/login", login);
// app.use("/api/profile", profile);
// app.use("/api/plans", plans);
// require("./startup/routes")(app);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
require("./startup/db")();
require("./startup/config");
require("./startup/prod")(app);

// app.use(error);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  logger.log.info(`Starting application on port ${port}`);
});

module.exports = server;
