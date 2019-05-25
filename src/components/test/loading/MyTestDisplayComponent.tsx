import React from "react";
import MyTestDisplayChild from "../MyTestDisplayChild";
import { Store} from "../../../common/Store";
import { retrieveChainState, fetchUsers } from "../../../common/Actions";


const ETH_CONTRACT = '';



function MyTestDisplayComponent(props: any ) {
  const { state, dispatch} = React.useContext(Store);
  const {web3State, sChainState} = state;
  //const { web3State, sChainState } = React.useContext(ChainStateStore);

  console.log("MyTestDisplayComponent", web3State, sChainState);

  React.useEffect(() => {
    const callForFetch = async() => {
      await retrieveChainState(web3State, sChainState, dispatch);

      await fetchUsers(web3State, sChainState, dispatch);
    }
    callForFetch();
  }, [])

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
