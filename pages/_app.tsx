import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import { getLibrary } from "../config";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
