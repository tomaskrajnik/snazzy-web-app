const cors = require("cors");

module.exports = function (app) {
  const corsOptions = {
    exposedHeaders: "x-auth-token",
    origin: "http://localhost:5000",
  };

  app.use(cors(corsOptions));
};
