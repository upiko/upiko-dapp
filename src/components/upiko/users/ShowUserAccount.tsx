import React from 'react';
import { Card } from 'antd';
import { Store } from '../../../common/Store';
import { fetchUser, retrieveChainState, useWeb3, setAccount } from '../../../common/Actions';
import useChainState from '../../chainstate/useChainState';
import useAccountWatch from '../../chainstate/useAccountWatch';
import { useWeb3Context } from 'web3-react';
import useSideChain from '../../test/web3/useSideChain';
import useReactWeb3 from '../../chainstate/useReactWeb3';



export default function ShowUserAccount(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const {web3State, sChainState} = state;
  const [ethAddr, setethAddr] = React.useState('');
  const [name, setName] = React.useState('');
  const [isProvider, setIsProvider] = React.useState('');
  const web3Context = useWeb3Context();
  const [lastAcct, setLastAcct] = React.useState('');

  const context = useWeb3Context();
  React.useEffect(() => {
    context.setFirstValidConnector(['MetaMask']);
  }, [])

  React.useEffect(() => {
    console.log("ShowUserAccount.useEffect([context.account])");
    if (!context.active && !context.error) {
      console.log("context is !active, !error, assuming loading");
    } else if (context.error) {
      console.error("context is in error", context.error);    
    } else {
      let temp = context.account;
      if (temp){
        setLastAcct(temp);
      }
    } 
  }, [context.account]);
  

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Current User Account" bordered={false} >
      <p>Eth Account: {lastAcct}</p>
       <p>User name: {name}</p>
       <p>isProvider?: {name ?  isProvider.toString() : ""}</p>
      </Card>
    </div>
  )
}
