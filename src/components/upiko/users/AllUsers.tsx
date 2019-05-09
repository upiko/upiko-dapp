import React from 'react'
import { Card, List, Avatar } from 'antd';
import { withSChain } from '../../chainstate/SideChainWrap';
import { withWeb3Contract } from '../../chainstate/Web3StateWrap';
import { Store } from '../../../common/Store';
import { fetchUsers } from '../../../common/Actions';
import { IUsers, IUser } from '../../../common/Interfaces';



function AllUsers(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [inited, setInited] = React.useState(false);

  const loadUsers = async () => {
    fetchUsers(web3State, sChainState, dispatch);
    setInited(true);
  };

  if (!inited && sChainState.sChainClient) {
   loadUsers();
  }
  

  const userStateToArray = (usersState: any): Array<IUser> => {
    let usersArray: Array<IUser> = [];

    for (let i in users){
      usersArray.push(usersState[i]);
    }
    return usersArray;
  }


  const { users } = state.usersState;
  let usersArray  = userStateToArray(users);

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="All Users" bordered={false} >
      <List
          header="All Users"
          bordered
          dataSource={usersArray}
          renderItem={item => (
            <List.Item 
              key={item.ethAddr}
            >
              <p className="strong-p">{item.name}</p>    
              <p>{" | "}{item.ethAddr}</p>  
              <p>{" | is Provider > "}{JSON.stringify(item.isProvider)}</p>                     
            </List.Item>
          )}
        />    
    </Card>
  </div>
  )
}

export default withWeb3Contract(withSChain(AllUsers));