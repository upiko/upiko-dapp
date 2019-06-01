import React from 'react';
import { useWeb3Context } from "web3-react";



export default function useReactWeb3(){
  const [account, setAccount] = React.useState('');
  const web3Context = useWeb3Context();

  console.log("useReactWeb3()", web3Context);

  React.useEffect(() => {
    console.log("useReactWeb3().useEffect()", web3Context);

    if (!web3Context.active && !web3Context.error){
      console.log("useReactWeb3() context not active and not error, assuming loading.");
    }else if (web3Context.error) {
      console.error("useReactWeb3() error occured", web3Context.error);
    }else {
      console.log("account set", web3Context.account);
      setAccount(web3Context.account);
    }
  });

  return account;
}
