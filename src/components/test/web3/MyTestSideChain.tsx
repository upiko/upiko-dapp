import React from 'react'
import useSideChain from './useSideChain';
import { fetchUsers, initSideChain } from '../../../common/Actions';
import useStore from '../../../common/useStore';
import { load } from 'dotenv';

export default function MyTestSideChain() {

  const [state, dispatch] = useStore();
  const sChainState = useSideChain();

 /* React.useEffect(() => {
    const load = async() => {
      initSideChain(dispatch);
    }
   
    load();
  }, []);
*/

  React.useEffect(() => {
    console.log("MyTestSideChain.useEffect([sChainState])");
    const load = async() => {
      console.log("about to call fetchUsers()")
      await fetchUsers(sChainState, dispatch);
    }
    if (sChainState.sChainClient.networkId){
     load();
    }else {
      console.error("no sChainClient?");
    }
  }, [sChainState]);

  console.log(state);

/*
  const load = async() => {
    await fetchUsers(sChainState, dispatch);
  }

  load();
*/
  return (
    <React.Fragment>
      <p className="lead">Side chain context info -></p>

    </React.Fragment>
  )
}
