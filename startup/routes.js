const error = require("./../middleware/error");
const register = require("../routes/register");
const login = require("./../routes/login");
const profile = require("./../routes/profile");
const plans = require("./../routes/plans");
const bodyParser = require("body-parser");

module.exports = function (app) {
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(
  //   bodyParser.json({
  //     type: "application/json",
  //   })
  // );

  app.use("/api/register", register);
  app.use("/api/login", login);
  app.use("/api/profile", profile);
  app.use("/api/plans", plans);

  app.use(error);
};
