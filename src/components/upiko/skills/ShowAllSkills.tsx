import React from 'react'
import { withWeb3Contract } from '../../chainstate/Web3StateWrap';
import { withSChain } from '../../chainstate/SideChainWrap';
import { Card, List } from 'antd';
import { Store } from '../../../common/Store';
import { fetchSkills } from '../../../common/Actions';
import useActionLoad from '../../chainstate/UseActionLoad';


function ShowAllSkills(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [inited, setInited] = React.useState(false);


  React.useEffect(() => {
  }, []);


  const load = async () => {
    fetchSkills(web3State, sChainState, dispatch);
    setInited(true);
  };

  const ret = useActionLoad(fetchSkills, props);
  console.log("ret.myVal", ret.myVal);
  
 
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