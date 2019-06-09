import React from 'react'
import { Card, List, Avatar } from 'antd';
import { Store } from '../../../common/Store';
import { fetchUsers } from '../../../common/Actions';
import { IUser } from '../../../common/Interfaces';

import useLoomToLoad from '../../chainstate/useLoomToLoad';
import useLoomWithConfig from '../../chainstate/useLoomWithConfig';
import { resultToArray } from '../../../utils/StateUtil';



export default function AllUsers(props:any) {
 const { dispatch } = React.useContext(Store);
 const loomObj = useLoomWithConfig();
 const users = useLoomToLoad(loomObj, async() => {
  return await fetchUsers(loomObj, dispatch);
 });

  let usersArray = resultToArray<IUser>(users);

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
