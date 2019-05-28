import React from "react";
import MyTestDisplayChild from "./web3/MyTestDisplayChild";
import { Store} from "../../common/Store";
import { fetchSkills } from "../../common/Actions";
import useChainState from "../chainstate/useChainState";
import useAccountWatch from "../chainstate/useAccountWatch";
import { useWeb3Context } from 'web3-react'


export default function MyTestDisplayComponent(props: any ) {
  const { state, dispatch} = React.useContext(Store);
  const {web3State, sChainState} = state;
  

  React.useEffect(() => {
    context.setFirstValidConnector(['MetaMask'])
  }, [])


  const context = useWeb3Context();
  if (!context.active && !context.error) {
    // loading
    //return ...
    console.log("loading web3..")
  } else if (context.error) {
    //error
    //return ...
    console.error("something went wrong loading web3");
  } else {
    // success
    console.log("web3 loaded");
  }


  useChainState(web3State, sChainState, dispatch, fetchSkills);
  //useAccountWatch(web3State, dispatch, sChainState);
  
  const {skills} = state.skillsList;

  return (
    <div className="container mydisplay-container">
      <p>skills: {skills}</p>
      <p>sos</p>
      <MyTestDisplayChild />
      <p>web3 account:{context.account}</p>
    </div>
  );
}

