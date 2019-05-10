import React, { useState, useEffect } from 'react';
import { Store } from '../../common/Store';

/* TODO: define an action load interface
*/
export default function useActionLoad(actionLoadFunction:any, props:any) {
  console.log("Hook.useActionLoad");

  const { state, dispatch } = React.useContext(Store);
  const [inited, setInited] = React.useState(false);
  const { web3State, sChainState } = props;


 /* const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;*/
  return {
    myVal: "yes"
  }
}