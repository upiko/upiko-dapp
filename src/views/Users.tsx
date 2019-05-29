import React from 'react'
import ShowUserAccount from '../components/upiko/users/ShowUserAccount';
import AddUserToSideChain from '../components/upiko/users/AddUserToSideChain';
import AllUsers from '../components/upiko/users/AllUsers';

import { Connectors } from 'web3-react';
const { InjectedConnector, NetworkOnlyConnector } = Connectors;
const MetaMask = new InjectedConnector({ supportedNetworks: [1,3,4] })
const connectors = { MetaMask };
import Web3Provider from 'web3-react';
import Web3 from 'web3';


export default function Users() {
 
  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">Users</h3>
            <div className="heading-underline"></div>      
              <div className="container mydisplay-container">
                <Web3Provider connectors={connectors} libraryName={'web3.js'} web3Api={Web3}>
                  <ShowUserAccount />
                  <AddUserToSideChain />
                  <AllUsers />    
                </Web3Provider>   
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/*

 
                  

                  */
