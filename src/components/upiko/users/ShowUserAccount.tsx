import React from 'react'
import { withWeb3Contract } from '../../chainstate/Web3StateWrap';
import { withSChain } from '../../chainstate/SideChainWrap';
import { Card } from 'antd';
import { Store } from '../../../common/Store';
import { fetchUser } from '../../../common/Actions';


function ShowUserAccount(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [inited, setInited] = React.useState(false);
  const {name, isProvider} = state.userState;
  const ethAddr = web3State.accounts[0];

  /*
  React.useEffect(()=> {
    const doFetch = async() => {
      if (sChainState.sChainClient){
        fetchUser(ethAddr, web3State, sChainState, dispatch);
      }
    }
    doFetch();
  }, []);*/

  
  const loadUser = async() => {
    fetchUser(ethAddr, web3State, sChainState, dispatch);
  }

  if (!inited && sChainState.sChainClient) {
    loadUser();
    setInited(true);
  }
  

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Current User Account" bordered={false} >
      <p>Eth Account: {ethAddr}</p>
       <p>User name: {name}</p>
       <p>isProvider?: {name ?  isProvider.toString() : ""}</p>
      </Card>
    </div>
  )
}

export default withWeb3Contract(withSChain(ShowUserAccount));