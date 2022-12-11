import { InjectedConnector } from "@web3-react/injected-connector";
import web3 from "web3";
import { provider } from "web3-core";

const ETHEREUM_NETWORK = 1;
const POLIGON_NETWORK = 137;
const MUMBAY_TESTNET_NETWORK = 80001;

export const connector = new InjectedConnector({
  supportedChainIds: [ETHEREUM_NETWORK, POLIGON_NETWORK],
});

export const getLibrary = (provider: provider) => {
  const library = new web3(provider);
  return library;
};
