import React from "react";
import { withWeb3Contract } from "../../chainstate/Web3StateWrap";
import { withSChain } from "../../chainstate/SideChainWrap";
import MyTestDisplayChild from "../MyTestDisplayChild";
import { Store, ChainStateStore } from "../../../common/Store";
import { fetchNone, retrieveChainState } from "../../../common/Actions";
import { async } from "q";

const ETH_CONTRACT = '';



function MyTestDisplayComponent(props: any ) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = React.useContext(ChainStateStore);

  console.log("MyTestDisplayComponent", web3State, sChainState);

  React.useEffect(() => {
    const callForFetch = async() => {
      await retrieveChainState(web3State, sChainState, dispatch);

    }
    callForFetch();

  }, [web3State])

  /*const load = async() => {
    console.log("load()");
    fetchNone();
  }

  load();*/
 
  return (
    <div className="container mydisplay-container">
      <p>skills</p>
      <p>sos</p>
      <MyTestDisplayChild />
    </div>
  );
}

export default MyTestDisplayComponent;
