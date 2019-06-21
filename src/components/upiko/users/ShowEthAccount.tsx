import React from 'react';
import { Card, Spin } from 'antd';
import { Store } from '../../../common/Store';
import useReactWeb3 from '../../chainstate/useReactWeb3';
import { fetchUser } from '../../../common/Actions';
import { IUser } from '../../../common/Interfaces';
import useLoomWithConfig from '../../chainstate/useLoomWithConfig';


export default function ShowEthAccount(props:any) {
  const { dispatch } = React.useContext(Store);
  const [user, setUser] = React.useState<IUser|any>(null);  

  const ethAccount = useReactWeb3();

    if (!ethAccount){
      return (
        <Spin tip="Loading Ethereum Account... (Please Signin to MetaMask)">
        <div style={{ background: '#ECECEC', padding: '10px' }}>
          <Card title="Current Eth Account" bordered={false} >
          </Card>
        </div>
        </Spin>
      );
    }else {
      return (
        <div style={{ background: '#ECECEC', padding: '10px' }}>
          <Card title="Current Eth Account" bordered={false} >
          <p>Eth Account: {ethAccount}</p>
          </Card>
        </div>
      );
    }
}
