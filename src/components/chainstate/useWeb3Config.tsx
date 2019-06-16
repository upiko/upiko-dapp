
import Web3 from 'web3';
import { Connectors} from 'web3-react';


export interface Web3Config{
  connectors: any;
  libraryName: "web3.js" | "ethers.js" | null | undefined;
  web3Api: any;
 }


export default function useWeb3Config() {
  const { InjectedConnector } = Connectors;
  const MetaMask = new InjectedConnector({ supportedNetworks: [1, 3, 4, 5777] });
  const connectors = { MetaMask };

  let config:Web3Config = {
    'connectors': connectors,
    'libraryName': "web3.js",
    'web3Api': Web3
  }

  return config;
}