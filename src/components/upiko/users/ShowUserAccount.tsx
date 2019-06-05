import React from 'react';
import { Card } from 'antd';
import { Store } from '../../../common/Store';
import useReactWeb3 from '../../chainstate/useReactWeb3';


export default function ShowUserAccount(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const [name, setName] = React.useState('');
  const [isProvider, setIsProvider] = React.useState('');
  
  const ethAccount = useReactWeb3();

  
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Current User Account" bordered={false} >
      <p>Eth Account: {ethAccount}</p>
       <p>User name: {name}</p>
       <p>isProvider?: {name ?  isProvider.toString() : ""}</p>
      </Card>
    </div>
  )
}

