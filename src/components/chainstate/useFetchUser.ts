import React from 'react';
import { fetchUser } from '../../common/Actions';

import { Store } from '../../common/Store';
import useSideChain from './useSideChain';

export default function useFetchUser(ethAcct:string) {
   
  const { dispatch } = React.useContext(Store);
  const sChainState = useSideChain();

  React.useEffect(() => {
    const load = async() => {
      console.log("making call to fetchuser()")
      await fetchUser(ethAcct, sChainState, dispatch);
    }
    if (sChainState.sChainClient.networkId){
      console.log("sChain is available");
     load();
    }else {
      console.error("no sChainClient on this useEffect() call");
    }
  });
  
}