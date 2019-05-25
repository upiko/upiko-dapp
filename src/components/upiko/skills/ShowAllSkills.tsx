import React from 'react'

import { Card, List } from 'antd';
import { fetchSkills, retrieveChainState } from '../../../common/Actions';
import { Store } from '../../../common/Store';


export default function ShowAllSkills(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = state;



  React.useEffect(() => {
    const load = async() => {
      await retrieveChainState(web3State, sChainState, dispatch);
      await fetchSkills(web3State, sChainState, dispatch);
    }
    load();
  }, []);


  const {skills} = state.skillsList;
  
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="All Skills" bordered={false} >
      <p>{JSON.stringify(skills)}</p>
      </Card>
    </div>
  )
}
