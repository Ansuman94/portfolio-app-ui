import "../styles/globals.css";
// import "./Navs.css";
import { AppProps } from "next/app";
import { Props } from "react";

export default function App({ Component, pageProps }: AppProps) {
  //let component=props.Component;
  return <Component {...pageProps} />;
}
