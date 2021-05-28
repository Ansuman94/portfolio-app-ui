import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useEffect, ReactComponentElement, useState } from "react";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import Axios from "axios";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import Store from "../Store";
import React from "react";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import jwt_decode from "jwt-decode";
let renewTimeOut: any;
function Home(homeProps: any) {
  return (
    <div>
      <div>Home page</div>

      <div>
        <Link href="author/about">about</Link>
      </div>
      <div>
        <Link href="/api/v1/login">Login</Link>
      </div>
    </div>
  );
}
export const WithAuthentication = <P extends any>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    const [whetherAuthenticated, handleWhetherAuthenticated] = useState(false);
    useEffect(() => {
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("token") !== null
      ) {
        handleWhetherAuthenticated(true);
      }
    });
    const handleAuthSuccess = () => {
      handleWhetherAuthenticated(true);
    };
    return (
      <Provider store={Store}>
        {/* <Auth0Provider
          domain="myencode.us.auth0.com"
          clientId="z8fzbA6UHNUEJpngyFMGGkODi68ldbHg"
          redirectUri="http://localhost:3005/author/about"
        > */}
        <Auth0Provider
          domain={process.env.AUTH0_DOMAIN}
          clientId={process.env.AUTH0_CLIENT_ID}
          redirectUri={process.env.AUTH0_REDIRECT_URI}
        >
          {whetherAuthenticated ? (
            <Component {...props} />
          ) : (
            <div>Loading ....</div>
          )}
          <AuthContainer handleAuthSuccess={handleAuthSuccess} />
        </Auth0Provider>
      </Provider>
    );
  };
};
interface IAuthContainerProps {
  handleAuthSuccess: () => void;
}
const AuthContainer = (props: IAuthContainerProps) => {
  const {
    getAccessTokenWithPopup,
    getAccessTokenSilently,
    loginWithPopup
  } = useAuth0();
  const [whetherAuthenticated, handleWhetherAuthenticated] = useState(false);

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("ally-supports-cache") === null ||
  //     localStorage.getItem("ally-supports-cache") === undefined
  //   ) {
  //     loginWithPopup();
  //   }
  // }, []);
  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("token") === null
    ) {
      (async () => {
        try {
          // const token = await getAccessTokenWithPopup({
          //   audience: "https://myencode.us.auth0.com/api/v2/",
          //   scope: "read:current_user"
          // });
          const token = await getAccessTokenWithPopup({
            audience: process.env.AUTH0_AUDIENCE,
            scope: "read:current_user"
          });
          localStorage.setItem("token", token);
          Axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
          props.handleAuthSuccess();
          renewTimeOut = setTimeout(() => renewToken(), 1 * 55 * 60 * 1000);
        } catch (e) {
          console.error(e);
        }
      })();
    } else {
      const decodedToken = jwt_decode(localStorage.getItem("token"));
      const authToken = JSON.parse(JSON.stringify(decodedToken));
      const expiresOn = authToken["exp"];
      const expDate = new Date(0);
      expDate.setUTCSeconds(expiresOn);
      const currDate = new Date();
      const newTime = expDate.getTime() - currDate.getTime();
      console.log("check time", newTime);
      if (newTime <= 0) {
        renewToken();
      }
      renewTimeOut = setTimeout(() => renewToken(), newTime);
    }
  }, [getAccessTokenWithPopup]);
  const renewToken = () => {
    (async () => {
      try {
        // const token = await getAccessTokenWithPopup({
        //   audience: "https://myencode.us.auth0.com/api/v2/",
        //   scope: "read:current_user"
        // });
        const token = await getAccessTokenWithPopup({
          audience: process.env.AUTH0_AUDIENCE,
          scope: "read:current_user"
        });
        localStorage.setItem("token", token);
        console.log("token renewed");
        Axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
        props.handleAuthSuccess();
        renewTimeOut = setTimeout(() => renewToken(), 1 * 55 * 60 * 1000);
      } catch (e) {
        console.error(e);
      }
    })();
  };
  return <div></div>;
};

export default WithAuthentication(Home);
