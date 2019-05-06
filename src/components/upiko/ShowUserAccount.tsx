import React from 'react'
import { withWeb3Contract } from '../chainstate/Web3StateWrap';
import { withSChain } from '../chainstate/SideChainWrap';
import { Card } from 'antd';


function ShowUserAccount(props:any) {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="User Account" bordered={false} >
      <p>Eth Account: {props.web3State.accounts}</p>
       <p>User name:</p>
       <p>isProvider?:</p>
      </Card>
    </div>
  )
}

export default withWeb3Contract(withSChain(ShowUserAccount));