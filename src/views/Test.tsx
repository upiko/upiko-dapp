import React from 'react'
import Web3Provider from 'web3-react';
import ShowUserAccount from '../components/upiko/users/ShowUserAccount';
import useWeb3Config from '../components/chainstate/useWeb3Config';
import useInitSideChain from '../components/chainstate/useInitSideChain';
import AddUserToSideChain from '../components/upiko/users/AddUserToSideChain';


export default function Test() {
  const web3Config = useWeb3Config();


  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">==--* test  +___=-`</h3>
            
            <div className="heading-underline"></div>
            <Web3Provider connectors={web3Config.connectors} libraryName={web3Config.libraryName} web3Api={web3Config.web3Api}> 
             
              <ShowUserAccount />
            </Web3Provider>
          </div>
        </div>
      </div>
    </div>
  )
}
