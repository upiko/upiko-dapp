import React from "react";
import MyTestDisplayChild from "./web3/MyTestDisplayChild";
import { Store} from "../../common/Store";
import { fetchSkills } from "../../common/Actions";
import useChainState from "../chainstate/useChainState";


const ETH_CONTRACT = '';



function MyTestDisplayComponent(props: any ) {
  const { state, dispatch} = React.useContext(Store);
  const {web3State, sChainState} = state;

  useChainState(web3State, sChainState, dispatch, fetchSkills);
  
  const {skills} = state.skillsList;

  return (
    <div className="container mydisplay-container">
      <p>skills: {skills}</p>
      <p>sos</p>
      <MyTestDisplayChild />
    </div>
  );
}

export default MyTestDisplayComponent;
