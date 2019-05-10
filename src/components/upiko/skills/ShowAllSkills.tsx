import React from 'react'
import { withWeb3Contract } from '../../chainstate/Web3StateWrap';
import { withSChain } from '../../chainstate/SideChainWrap';
import { Card, List } from 'antd';
import { fetchSkills } from '../../../common/Actions';
import { IChainStateProps } from '../../../common/Interfaces';
import { Store } from '../../../common/Store';


function ShowAllSkills(props:IChainStateProps) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;

  React.useEffect(() => {
    fetchSkills(web3State, sChainState, dispatch);
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

export default withWeb3Contract(withSChain(ShowAllSkills));