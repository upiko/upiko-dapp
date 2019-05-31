import React from 'react'
import useSideChain from './useSideChain';
import { fetchUsers, initSideChain } from '../../../common/Actions';
import useStore from '../../../common/useStore';


export default function MyTestSideChain() {
  const [state, dispatch] = useStore();
  const sChainState = useSideChain();

  React.useEffect(() => {
    const load = async() => {
      await fetchUsers(sChainState, dispatch);
    }
    if (sChainState.sChainClient.networkId){
     load();
    }else {
      console.error("no sChainClient on this useEffect() call");
    }
  }, [sChainState]);

  
  return (
    <React.Fragment>
      <p className="lead">Side chain context info -></p>
    </React.Fragment>
  )
}
