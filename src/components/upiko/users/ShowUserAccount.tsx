import React from 'react';
import { Card } from 'antd';
import { Store } from '../../../common/Store';
import { fetchUser, retrieveChainState } from '../../../common/Actions';
import useChainState from '../../chainstate/useChainState';
import useAccountWatch from '../../chainstate/useAccountWatch';


export default function ShowUserAccount(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const {web3State, sChainState} = state;
  const [ethAddr, setethAddr] = React.useState('');
  const [name, setName] = React.useState('');
  const [isProvider, setIsProvider] = React.useState('');

 
 React.useEffect(() => {
    const load = async() => {
      await retrieveChainState(web3State, sChainState, dispatch);
      await fetchUser(web3State.accounts[0], web3State, sChainState, dispatch);
  }
    load();
  }, []);


  React.useEffect(() => {
    console.log("UUUUUUUUUUUseEffect, on accounts");
    setethAddr(web3State.accounts[0]);
    setName(state.userState.name);
    setIsProvider(state.userState.isProvider);
  }, [web3State.accounts[0]]);


 // useAccountWatch(web3State, dispatch, sChainState);


  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Current User Account" bordered={false} >
      <p>Eth Account: {ethAddr}</p>
       <p>User name: {name}</p>
       <p>isProvider?: {name ?  isProvider.toString() : ""}</p>
      </Card>
    </div>
  )
}
