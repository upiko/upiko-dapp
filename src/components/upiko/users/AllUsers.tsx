import React from 'react'
import { Card, List, Avatar } from 'antd';
import { Store } from '../../../common/Store';
import { fetchUsers } from '../../../common/Actions';
import { IUser } from '../../../common/Interfaces';



export default function AllUsers(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = state;


  React.useEffect(() => {
    const load = async() => {
      //await retrieveChainState(web3State, sChainState, dispatch);
      await fetchUsers(sChainState, dispatch);
    }
    load();
  }, []);


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
