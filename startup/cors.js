const cors = require("cors");

module.exports = function (app) {
  // const corsOptions = {

  //   origin: "https://snazzy-web.herokuapp.com/",

  // };

  const allowedOrigins = [
    "https://localhost:5000",
    "https://snazzy-web.herokuapp.com/",
  ];
  app.use(
    cors({
      origin: function (origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
          const msg =
            "The CORS policy for this site does not " +
            "allow access from the specified Origin.";
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
      exposedHeaders: "x-auth-token",
    })
  );
};
