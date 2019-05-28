import React from "react";
import MyTestDisplayChild from "./web3/MyTestDisplayChild";
import { Store } from "../../common/Store";
import { fetchSkills, initWeb3, useWeb3 } from "../../common/Actions";
import useChainState from "../chainstate/useChainState";
import { useWeb3Context } from "web3-react";

export default function MyTestDisplayComponent(props: any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = state;
  const web3Context = useWeb3Context();

  /*  React.useEffect(() => {
    context.setFirstValidConnector(['MetaMask'])
  }, [])*/

  React.useEffect(() => {
    web3State.web3Context = web3Context;
    initWeb3(web3State, dispatch);
  }, []);

  React.useEffect(() => {
    web3State.web3Context = web3Context;
    useWeb3(web3State, dispatch);
  });

  //useChainState(web3State, sChainState, dispatch, fetchSkills);
  //useAccountWatch(web3State, dispatch, sChainState);

  const { skills } = state.skillsList;

  return (
    <div className="container mydisplay-container">
      <p>skills: {skills}</p>
      <p>sos</p>
      <MyTestDisplayChild />
      <p>web3 account:{web3State.account}</p>
    </div>
  );
}
