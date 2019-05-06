import React from 'react'
import { withWeb3Contract } from '../chainstate/Web3StateWrap';
import { withSChain } from '../chainstate/SideChainWrap';
import { Card } from 'antd';
import { Store } from '../../common/Store';



function ShowUserAccount(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const userState = state.userState;

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="User Account" bordered={false} >
      <p>Eth Account: {props.web3State.accounts}</p>
       <p>User name: {userState.name}</p>
       <p>isProvider?: {userState.name ?  userState.isProvider.toString() : ""}</p>
      </Card>
    </div>
  )
}

export default withWeb3Contract(withSChain(ShowUserAccount));