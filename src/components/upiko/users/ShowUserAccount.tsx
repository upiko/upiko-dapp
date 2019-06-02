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
    
  const acct = useReactWeb3();

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Current User Account" bordered={false} >
      <p>Eth Account: {acct}</p>
       <p>User name: {name}</p>
       <p>isProvider?: {name ?  isProvider.toString() : ""}</p>
      </Card>
    </div>
  )
}

