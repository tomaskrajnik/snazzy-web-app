const cors = require("cors");

module.exports = function (app) {
  const corsOptions = {
    exposedHeaders: "x-auth-token",
    origin: "https://snazzy-web.herokuapp.com/",
  };

  app.use(cors(corsOptions));
};
