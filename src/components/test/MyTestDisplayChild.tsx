import React from 'react'
import { Store } from '../../common/Store';
import { fetchSkills } from '../../common/Actions';


export default function MyTestDisplayChild(props:any) {
  const { web3State, sChainState} = props;
  const { state, dispatch } = React.useContext(Store);

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

  return (
   <React.Fragment>
     <span>My Test Display Child</span>
   </React.Fragment>
  )
}
