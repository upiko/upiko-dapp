import React from 'react';
import { WEB3_ACCOUNT_CHECK_INTERVAL } from './../../config';
import { initWeb3, retrieveChainState } from '../../common/Actions';

export default function useAccountWatch(web3State, dispatch){
  const [account, setAccount] = React.useState('');
  const [intervalId, setIntervalId] = React.useState('');
  const [web3StateVal, setWeb3StateVal] = React.useState({});


  React.useEffect(() => {
   
    const loadCurrentUser = async() => {
      await initWeb3(dispatch, web3State);
      await getAccountInfo(web3State);
    }
    loadCurrentUser();
  }, []);


  React.useEffect(() => {

    const startWatchTimer = async() => {
      console.log("starting useAccountWatch() TIMER, with interval:", WEB3_ACCOUNT_CHECK_INTERVAL);
      let intId = setInterval(checkWeb3Account(), WEB3_ACCOUNT_CHECK_INTERVAL);
      setIntervalId(intId);
      console.log("intervalId")
    }
    
    startWatchTimer();

    return function cleanup() {
      console.log("cleaning up useAccountWatch() TIMER");
    };
    
  }, []);


  const getAccountInfo = async (web3State) => {
    const { web3 } = web3State;
    if (web3) {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length) {
        setAccount(accounts[0]);
        console.log("user set to:" + accounts[0]);
      }else {
        console.error("no accounts are available to use (accounts.length < 1)");
      }  
    }
  };

  const checkWeb3Account = async () => {
    await initWeb3(dispatch, web3State);
    let web3 = web3State.web3;
    let accounts = await web3.eth.getAccounts();
    if (accounts[0] !== account){
      console.log("web3 account changed");
      
    }    
  };
}