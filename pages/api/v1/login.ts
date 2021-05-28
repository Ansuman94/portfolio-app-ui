// import { NextApiRequest, NextApiResponse } from "next";
// import auth0 from "../../../utils/auth0";

// export default async function login(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     await auth0.handleLogin(req, res);
//   } catch (error) {
//     console.error(error);
//     res.status(error.status || 400).end(error.message);
//   }
// }
import auth0 from "../../../utils/auth0";

export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res);
    console.log("loging in...", auth0);
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
