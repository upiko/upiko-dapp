import React from 'react'
import TokenContract from './../../contracts/PikoToken.json';
import useReactWeb3Library from '../chainstate/useReactWeb3Library';
import useEthContract from '../chainstate/useEthContract';
import ShowEthAccount from '../upiko/users/ShowEthAccount';
import { Card, Button } from 'antd';
import useShowEthNetwork from '../chainstate/useShowEthNetwork';
import useShowERC20TokenDetails from '../chainstate/useShowERC20TokenDetails';


export default function TokenRewardTest() {
  const lib = useReactWeb3Library();
  const inst = useEthContract(lib, TokenContract);
  const network = useShowEthNetwork(lib);
  const [name, symbol, totalSupply] = useShowERC20TokenDetails(inst);
  

  return (
  <React.Fragment>
    <p>Token Reward $$$</p>
    <ShowEthAccount />
    
    <div style={{ background: '#ECECEC', padding: '10px' }}>
      <Card title="Token Reward" bordered={true} >
        <p>Current Eth Network: {network}</p>
        <p>Token Name: {name}</p>
        <p>Token Symbol: {symbol}</p>
        <p>Token Total Supply: {totalSupply}</p>
        <Button
          type="dashed"
          onClick={async() => {       
            console.log("adding reward for user");
          }}
          >
            Add reward (for this user)
        </Button>
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
