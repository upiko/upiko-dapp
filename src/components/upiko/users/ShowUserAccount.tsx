import React from 'react';
import { Card } from 'antd';
import { Store } from '../../../common/Store';
import { fetchUser, retrieveChainState } from '../../../common/Actions';


export default function ShowUserAccount(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const {web3State, sChainState} = state;
  const [ethAddr, setethAddr] = React.useState('');
  const {name, isProvider} = state.userState;

 
  React.useEffect(() => {
    const load = async() => {
      await retrieveChainState(web3State, sChainState, dispatch);
      setethAddr(web3State.accounts[0]);
      await fetchUser(web3State.accounts[0], web3State, sChainState, dispatch);
  }
    load();
  }, []);


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
