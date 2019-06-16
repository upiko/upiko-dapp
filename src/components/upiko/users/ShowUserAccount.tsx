import React from 'react';
import { Card, Spin } from 'antd';
import { Store } from '../../../common/Store';
import useReactWeb3 from '../../chainstate/useReactWeb3';
import { fetchUser } from '../../../common/Actions';
import { IUser } from '../../../common/Interfaces';
import useLoomWithConfig from '../../chainstate/useLoomWithConfig';


export default function ShowUserAccount(props:any) {
  const { dispatch } = React.useContext(Store);
  const [user, setUser] = React.useState<IUser|any>(null);  

  const loomObj = useLoomWithConfig();
  const ethAccount = useReactWeb3();
  
  React.useEffect(() => {
    const fetchAndSetUser = async() => {
       const temp:IUser = await fetchUser(ethAccount, loomObj, dispatch);
       if (temp){
        setUser(temp);
       }else {
         console.error("user unexpectedly not set, null returned from Action.fetchUser()");
       }
    }
    if (ethAccount && loomObj){
      fetchAndSetUser();
    }
  }, [loomObj, ethAccount]);

    if (!ethAccount){
      return (
        <Spin tip="Loading Ethereum Account... (Please Signin to MetaMask)">
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title="Current User Account" bordered={false} >
          </Card>
        </div>
        </Spin>
      );
    }else {
      return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title="Current User Account" bordered={false} >
          <p>Eth Account: {ethAccount}</p>
          <p>User name: {!user ? "" : user.name} </p>
          <p>isProvider?:{!user ? "" : (!user.name ? "" : user.isProvider.toString())}</p>
          </Card>
        </div>
      );
    }
}
