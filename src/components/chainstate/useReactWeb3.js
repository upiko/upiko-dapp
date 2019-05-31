import React from 'react';
import { useWeb3Context } from "web3-react";


export default function useReactWeb3(){
  const [account, setAccount] = React.useState('');

  const web3Context = useWeb3Context();

  if (!web3Context.active && !web3Context.error){
    console.log("useReactWeb3() context not active and not error, assuming loading.");
  }else if (web3Context.error) {
    console.error("useReactWeb3() error occured", web3Context.error);
  }else {
    setAccount(web3Context.account);
  }
 
  return account;
}



/*
  account = useState()

  useEffect() =>
    if active

    if error

    otherwise set

  [web3Context]

  return account
*/