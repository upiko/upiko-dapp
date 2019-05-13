import React from "react";
import { withWeb3Contract } from "../../chainstate/Web3StateWrap";
import { withSChain } from "../../chainstate/SideChainWrap";
import MyTestDisplayChild from "../MyTestDisplayChild";



function MyTestDisplayComponent(props: any ) {
  const { web3State, sChainState} = props;

  console.log("MyTestDisplayComponent", web3State, sChainState);
 
  return (
    <div className="container mydisplay-container">
      <p>skills</p>
      <p>sos</p>
      <MyTestDisplayChild />
    </div>
  );
}

export default withWeb3Contract(withSChain(MyTestDisplayComponent));
