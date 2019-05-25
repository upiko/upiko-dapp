import React from 'react'

import { Card, List } from 'antd';
import { fetchSkills, retrieveChainState } from '../../../common/Actions';
import { Store } from '../../../common/Store';
import useChainState from '../../chainstate/useChainState';


export default function ShowAllSkills(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = state;

  useChainState(web3State, sChainState, dispatch, fetchSkills);

  const {skills} = state.skillsList;
  
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="All Skills" bordered={false} >
      <p>{JSON.stringify(skills)}</p>
      </Card>
    </div>
  )
}
