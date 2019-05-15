import React from 'react'
import { Store, ChainStateStore } from '../../common/Store';



export default function MyTestDisplayChild(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState} = React.useContext(ChainStateStore);


  //console.log("MyTestDisplay Child()", web3State, sChainState);
/*
  React.useEffect(() => {
    console.log("MyTestDisplayComponent.useEffect()");
    console.log("props=", props);
    
    if (sChainState.sChainClient){
      fetchSkills(web3State, sChainState, dispatch);
    }
  });
*/
  /*console.log("state", state);
  console.log("props", props);
  console.log("web3State", web3State);
  console.log("sChainstate", sChainState);*/

  return (
   <React.Fragment>
     <span>My Test Display Child</span>
   </React.Fragment>
  )
}
