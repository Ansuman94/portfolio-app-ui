import auth0 from "../../../utils/auth0";

export default async function login(req, res) {
  try {
    await auth0.handleCallback(req, res, {
      redirectUri: "http://localhost:3005/"
    });
    console.log("loging in...", auth0);
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
