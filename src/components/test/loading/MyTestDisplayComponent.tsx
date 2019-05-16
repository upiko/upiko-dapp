import React from "react";
import { withWeb3Contract } from "../../chainstate/Web3StateWrap";
import { withSChain } from "../../chainstate/SideChainWrap";
import MyTestDisplayChild from "../MyTestDisplayChild";
import { Store, ChainStateStore } from "../../../common/Store";
import { fetchNone } from "../../../common/Actions";



function MyTestDisplayComponent(props: any ) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = React.useContext(ChainStateStore);

  console.log("MyTestDisplayComponent", web3State, sChainState);

  const load = async() => {
    console.log("load()");
    fetchNone();
  }

  load();
 
  return (
    <div className="container mydisplay-container">
      <p>skills</p>
      <p>sos</p>
      <MyTestDisplayChild />
    </div>
  );
}

export default MyTestDisplayComponent;
