import React from 'react'
import { Connectors, useWeb3Context } from 'web3-react';
import Web3Provider from 'web3-react';
import Web3 from 'web3';
import MyTestReactWeb3 from '../components/test/web3/MyTestReactWeb3';
import MyTestSideChain from '../components/test/web3/MyTestSideChain';
import { initSideChain } from '../common/Actions';
import { Store } from '../common/Store';
import ShowUserAccount from '../components/upiko/users/ShowUserAccount';
import MyTestRW3Child from '../components/test/web3/MyTestRW3Child';


const { InjectedConnector, NetworkOnlyConnector } = Connectors;
const MetaMask = new InjectedConnector({ supportedNetworks: [1,3,4] })
const connectors = { MetaMask };


export default function Test(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const web3Context = useWeb3Context();

 
  React.useEffect(() => {
    web3Context.setFirstValidConnector(['MetaMask']);

    const load = async() => {
      initSideChain(dispatch);
    }
    load();
  }, [])


  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">==--* test  +___=-`</h3>
            
            <div className="heading-underline"></div>
            <Web3Provider connectors={connectors} libraryName={'web3.js'} web3Api={Web3}> 
                <MyTestSideChain />
                <MyTestRW3Child />
                <ShowUserAccount />
            </Web3Provider>

          </div>
        </div>
      </div>
    </div>
  )
}
