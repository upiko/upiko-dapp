import React from 'react'
import { withWeb3Contract } from '../../chainstate/Web3StateWrap';
import { withSChain } from '../../chainstate/SideChainWrap';
import { Card, List } from 'antd';
import { Store } from '../../../common/Store';
import { fetchSkills } from '../../../common/Actions';

function ShowAllSkills(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [inited, setInited] = React.useState(false);
  
  const load = async () => {
    fetchSkills(web3State, sChainState, dispatch);
    setInited(true);
  };

  if (!inited && sChainState.sChainClient) {
    load();
   }

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