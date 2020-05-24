const cors = require("cors");

module.exports = function (app) {
  const corsOptions = {
    exposedHeaders: "x-auth-token",
    origin: "*",
  };

  app.use(cors(corsOptions));
};
