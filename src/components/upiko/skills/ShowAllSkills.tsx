import React from 'react'

import { Card, List } from 'antd';
import { fetchSkills, retrieveChainState, initSideChain } from '../../../common/Actions';
import { Store } from '../../../common/Store';
import useSideChain from '../../chainstate/useSideChain';



export default function ShowAllSkills(props:any) {

  const { dispatch, state } = React.useContext(Store);
  const sChainState = useSideChain();

  React.useEffect(() => {
    const load = async() => {
      await initSideChain(dispatch);
    }
    load();
  }, []);

  React.useEffect(() => {
    const load = async() => {
      console.log("making call to fetchuser()")
      await fetchSkills(sChainState, dispatch);
    }
    if (sChainState.sChainClient.networkId){
      console.log("sChain is available");
     load();
    }else {
      console.error("no sChainClient on this useEffect() call");
    }
  }, [sChainState]);

  //useChainState(web3State, sChainState, dispatch, fetchSkills);

  const {skills} = state.skillsList;
  
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="All Skills" bordered={false} >
      <p>{JSON.stringify(skills)}</p>
      </Card>
    </div>
  )
}
