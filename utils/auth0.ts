import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  baseURL: "http://localhost:3005",
  issuerBaseURL: process.env.AUTH0_BASE_URI,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  routes: {
    postLogoutRedirect: process.env.AUTH0_POST_REDIRECT_URI,
    callback: process.env.AUTH0_REDIRECT_URI
  },
  //scope: process.env.AUTH0_SCOPE,
  // redirectUri: process.env.AUTH0_REDIRECT_URI,
  // postLogoutRedirectUri: process.env.AUTH0_POST_REDIRECT_URI,
  secret: process.env.AUTH0_COOKIE_SECRET
  // session: {
  //   // The secret used to encrypt the cookie.
  //   cookieSecret: process.env.AUTH0_COOKIE_SECRET
  // }
});
