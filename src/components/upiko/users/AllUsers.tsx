import React from 'react'
import { Card, List, Avatar } from 'antd';
import { Store } from '../../../common/Store';
import { fetchUsers } from '../../../common/Actions';
import { IUser } from '../../../common/Interfaces';
import useLoom from '../../chainstate/useLoom';
import useLoomToLoad from '../../chainstate/useLoomToLoad';



export default function AllUsers(props:any) {
 const { dispatch } = React.useContext(Store);
 const loomObj = useLoom();
 const users = useLoomToLoad(loomObj, async() => {
  return await fetchUsers(loomObj, dispatch);
 });

  const userResultToArray = (result:any): Array<IUser> => {
    let usersArray: Array<IUser> = [];
    for (let i in result){
      usersArray.push(result[i]);
    }
    return usersArray;
  }

  console.log(users);
  let usersArray = userResultToArray(users);

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


/*

<div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="All Users" bordered={false} >
      
    </Card>
  </div>

*/