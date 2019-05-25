import React from 'react';
import { WEB3_ACCOUNT_CHECK_INTERVAL } from './../../config';
import { initWeb3, SET_ACCOUNT, fetchUser, retrieveChainState, setAccount } from '../../common/Actions';

export default function useAccountWatch(web3State, dispatch, sChainState){
  const [intervalId, setIntervalId] = React.useState('');
  

  React.useEffect(() => {
    const startWatchTimer = async() => {
      console.log("starting useAccountWatch() TIMER, with interval:", WEB3_ACCOUNT_CHECK_INTERVAL);
      let intId = setInterval(checkWeb3Account, WEB3_ACCOUNT_CHECK_INTERVAL);
      setIntervalId(intId);
      console.log("intervalId", intId);
    }
    
    startWatchTimer();

    return function cleanup() {
      clearInterval(intervalId)
      console.log("cleaning up useAccountWatch() TIMER, id:", intervalId);
    };
  }, []);


 /* const getAccountInfo = async (web3State) => {
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
  };*/


  const checkWeb3Account = async () => {
    //console.log("checkWeb3Account");
    await retrieveChainState(web3State, sChainState, dispatch);
    console.log("chainstate in checkWeb3", web3State);
    let web3 = web3State.web3;
    let account = web3State.account;
    let accounts = await web3.eth.getAccounts();
    console.log("current account=", account);
    console.log("pulled account=", accounts[0])
    if (accounts[0] !== account){
      console.log("web3 account changed to:", accounts[0]);
      //notify("account changed")

      setAccount(accounts[0], dispatch);
      await fetchUser(accounts[0], web3State, sChainState, dispatch);
    }    
  };
}