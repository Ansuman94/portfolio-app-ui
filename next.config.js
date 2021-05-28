// const path = require("path");
// const Dotenv = require("dotenv-webpack");
module.exports = {
  env:
    process.env.NODE_ENV === "production"
      ? { ...process.env }
      : {
          AUTH0_DOMAIN: "myencode.us.auth0.com",
          AUTH0_CLIENT_ID: "z8fzbA6UHNUEJpngyFMGGkODi68ldbHg",
          AUTH0_REDIRECT_URI: "http://localhost:3005/author/about",
          AUTH0_AUDIENCE: "https://myencode.us.auth0.com/api/v2/",
          WEB_API_URL: "https://portfolio-production-api.herokuapp.com/api/",
          AUTH0_CLIENT_SECRET:
            "Z70UyW3RFP85eMoKYcxwSzYFlbqdi6_mr311_lCMV38qr_4SaijHV_Wqj4bjdXFr",
          AUTH0_SCOPE: "openid profile",
          //AUTH0_REDIRECT_URI: "/api/v1/callback",
          AUTH0_POST_REDIRECT_URI: "http://localhost:3005/",
          AUTH0_COOKIE_SECRET:
            "smfdsmf732486324872472932852357{<28352bnf89238532889553536346741412044",
          AUTH0_BASE_URI: "https://myencode.us.auth0.com"
        }
  // webpack: config => {
  //   config.resolve.alias["@"] = path.resolve(__dirname);
  //   config.plugins.push(new Dotenv({ silent: true }));
  //   return config;
  // }
};
