import React from 'react';
import { Card } from 'antd';
import { Store } from '../../../common/Store';
import { fetchUser, retrieveChainState, useWeb3, setAccount, initSideChain } from '../../../common/Actions';
import useSideChain from '../../chainstate/useInitSideChain';
import useReactWeb3 from '../../chainstate/useReactWeb3';
import useFetchUser from '../../chainstate/useFetchUser';
import { async } from 'q';



export default function ShowUserAccount(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const [name, setName] = React.useState('');
  const [isProvider, setIsProvider] = React.useState('');
  const ethAccount = useReactWeb3();

  //useFetchUser(ethAccount);
 

  const sChainState = state.sChainState;
  React.useEffect(() => {
    console.log("ShowUserAccount.useEffect([]), calling initSideChain");
    initSideChain(dispatch);
  }, []);

  React.useEffect(() => {
    console.log("useEffect(), with schainstate", sChainState);
    
    const fetch = async() => {
      await fetchUser(ethAccount, sChainState, dispatch);
    }
    if (sChainState.sChainClient.networkId){
      console.log("sChain initialized, and usuable... calling fetch()");  
      fetch();  
    }
  }, [sChainState, ethAccount]);



  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Current User Account" bordered={false} >
      <p>Eth Account: {ethAccount}</p>
       <p>User name: {name}</p>
       <p>isProvider?: {name ?  isProvider.toString() : ""}</p>
      </Card>
    </div>
  )
}

