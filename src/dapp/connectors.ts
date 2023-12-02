import { InjectedConnector } from "@web3-react/injected-connector";

export const POLLING_INTERVAL = 12000;
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 1071, 42, 56, 88, 89, 97, 43113, 1337, 80001],
});
