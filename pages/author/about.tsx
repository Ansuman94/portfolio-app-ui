import { IState } from "../../redux/reducers/index";
import { useDispatch, useSelector, Provider } from "react-redux";
import * as commonActions from "../../redux/actions/CommonAction";
import Store from "../../Store";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import useSWR from "swr";
import Axios from "axios";
import { useEffect } from "react";
import { WithAuthentication } from "..";
import Navs from "../../components/Navs/Navs";
function about(homeProps: any) {
  console.log("check env variable");

  return (
    // <Provider store={Store}>
    //   <Auth0Provider
    //     domain="myencode.us.auth0.com"
    //     clientId="z8fzbA6UHNUEJpngyFMGGkODi68ldbHg"
    //     redirectUri="http://localhost:3005/author/about"
    //   >
    //     <AppContainer />
    //   </Auth0Provider>
    //   <Layout />
    // </Provider>
    <div>
      <Navs />
      <Layout />
    </div>
  );
}
const AppContainer = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    loginWithRedirect,
    loginWithPopup
  } = useAuth0();
  useEffect(() => {
    console.log(
      "check isAuthenticated",
      isAuthenticated,
      localStorage.getItem("ally-supports-cache")
    );
    if (
      localStorage.getItem("ally-supports-cache") === null ||
      localStorage.getItem("ally-supports-cache") === undefined
    ) {
      console.log("executing xyz");
      loginWithPopup();
    }
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenWithPopup({
          audience: "https://myencode.us.auth0.com/api/v2/",
          scope: "read:current_user"
        });
        localStorage.setItem("token", token);
        Axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenWithPopup]);

  console.log("check token 2222", isAuthenticated);
  return (
    <div>
      <Layout />
      <Link href="/api/v1/login">Login</Link>
      <div>Check</div>
    </div>
  );
};
export default WithAuthentication(about);
