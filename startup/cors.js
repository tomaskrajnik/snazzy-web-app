const cors = require("cors");

module.exports = function (app) {
  const corsOptions = {
    exposedHeaders: "x-auth-token",
  };

  app.use(cors(corsOptions));
  app.use(cors());
};
