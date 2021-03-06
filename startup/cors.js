const cors = require("cors");

module.exports = function (app) {
  const corsOptions = {
    exposedHeaders: "x-auth-token",
    origin: "https://snazzy-web-staging.herokuapp.com/",
  };

  app.use(cors(corsOptions));
};
