const cors = require("cors");

module.exports = function (app) {
  const corsOptions = {
    exposedHeaders: "x-auth-token",
  };
  app.options("*", cors());
  app.use(cors(corsOptions));
};
