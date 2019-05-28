import React from 'react'
import MyTestDisplayComponent from '../components/test/MyTestDisplayComponent';

import { Connectors } from 'web3-react';
const { InjectedConnector, NetworkOnlyConnector } = Connectors;
const MetaMask = new InjectedConnector({ supportedNetworks: [1,3,4] })
const connectors = { MetaMask };
import Web3Provider from 'web3-react';
import Web3 from 'web3';


export default function Test(props:any) {
 
  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">==--* test  +___=-`</h3>
            <div className="heading-underline"></div>
            <Web3Provider connectors={connectors} libraryName={'web3.js'} web3Api={Web3}>
                 <MyTestDisplayComponent />
            </Web3Provider>
          </div>
        </div>
      </div>
    </div>
  )
}
