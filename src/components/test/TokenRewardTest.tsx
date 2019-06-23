import React from "react";
import TokenContract from "./../../contracts/PikoToken.json";
import RewardContract from "./../../contracts/PikoRewardDelegate.json";
import useReactWeb3Library from "../chainstate/useReactWeb3Library";
import useEthContract from "../chainstate/useEthContract";
import ShowEthAccount from "../upiko/users/ShowEthAccount";
import { Card, Button } from "antd";
import useShowEthNetwork from "../chainstate/useShowEthNetwork";
import useShowERC20TokenDetails from "../chainstate/useShowERC20TokenDetails";
import useReactWeb3 from "../chainstate/useReactWeb3";

export default function TokenRewardTest() {
  const lib = useReactWeb3Library();
  const ethAcct = useReactWeb3();
  const inst = useEthContract(lib, TokenContract);
  const rewardInst = useEthContract(lib, RewardContract);
  const network = useShowEthNetwork(lib);
  const [name, symbol, totalSupply] = useShowERC20TokenDetails(inst);

  return (
    <React.Fragment>
      <p>Token Reward $$$</p>
      <ShowEthAccount />

      <div style={{ background: "#ECECEC", padding: "10px" }}>
        <Card title="Token Reward" bordered={true}>
          <p>Current Eth Network: {network}</p>
          <p>Token Name: {name}</p>
          <p>Token Symbol: {symbol}</p>
          <p>Token Total Supply: {totalSupply}</p>
          <Button
            type="dashed"
            onClick={async () => {
              console.log("adding reward for user");
              //{from:'0xcdf65D26550B6fF59c89Bd6D12Cfb08F62D475c6'}
              //const tx = await inst.methods.transfer(ethAcct, 666).send({from: '0xcdf65D26550B6fF59c89Bd6D12Cfb08F62D475c6'});
              const tx = await rewardInst.methods
                .rewardRegister()
                .send({ from: ethAcct });
            }}
          >
            Add reward (for this user)
          </Button>
        </Card>
      </div>

      <div style={{ background: "#ECECEC", padding: "10px" }}>
        <Card title="Token Redeem" bordered={true}>
        <Button
            type="danger"
            onClick={async () => {
              console.log("redeeming reward for all users");
              //{from:'0xcdf65D26550B6fF59c89Bd6D12Cfb08F62D475c6'}
              //const tx = await inst.methods.transfer(ethAcct, 666).send({from: '0xcdf65D26550B6fF59c89Bd6D12Cfb08F62D475c6'});
              const tx = await rewardInst.methods
                .payout()
                .send({ from: ethAcct });
            }}
          >
            Payout rewards (all users)
          </Button>
        </Card>
      </div>
    </React.Fragment>
  );
}
