const cors = require("cors");

module.exports = function (app) {
  const corsOptions = {
    exposedHeaders: "x-auth-token, Origin",
  };

  app.use(cors(corsOptions));
  app.use(cors());
};
