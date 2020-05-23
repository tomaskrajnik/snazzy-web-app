const config = require("config");

module.exports = function () {
  //JSON WEBTOKEN PRIVATE KEY
  if (!config.get("SNAZZY_TOKEN_PRIVATE_KEY")) {
    console.error("FATAL ERROR: Private token key is not defined");
    process.exit(1);
  }
};
