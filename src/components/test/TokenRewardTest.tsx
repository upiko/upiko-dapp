import React from 'react'
import TokenContract from './../../contracts/PikoToken.json';
import useReactWeb3Library from '../chainstate/useReactWeb3Library';
import useEthContract from '../chainstate/useEthContract';
import ShowEthAccount from '../upiko/users/ShowEthAccount';
import { Card } from 'antd';
import useShowEthNetwork from '../chainstate/useShowEthNetwork';


export default function TokenRewardTest() {
  const lib = useReactWeb3Library();
  const inst = useEthContract(lib, TokenContract);
  const network = useShowEthNetwork(lib);
  

  return (
  <React.Fragment>
    <p>Token Reward $$$</p>
    <ShowEthAccount />
    
    <div style={{ background: '#ECECEC', padding: '10px' }}>
    <Card title="Token Reward" bordered={true} >
      <p>Current Eth Network: {network}</p>
    </Card>
    </div>

    <div style={{ background: '#ECECEC', padding: '10px' }}>
    <Card title="Token Redeem" bordered={true} >
      <p>Button here</p>
    </Card>
    </div>

  </React.Fragment>
  )
}
