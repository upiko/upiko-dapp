import React from "react";
import { useWeb3Context } from "web3-react";

export default function useReactWeb3() {
  const web3Context = useWeb3Context();
  const [web3Acct, setWeb3Acct] = React.useState("");

  React.useEffect(() => {
    web3Context.setFirstValidConnector(["MetaMask"]);
  }, []);

  React.useEffect(() => {
    //console.log("ShowUserAccount.useEffect([context.account])");
    if (!web3Context.active && !web3Context.error) {
      //notifyWarn("You currently are not signed in to Metamask, please sign in");
    } else if (web3Context.error) {
      console.error("context is in error", web3Context.error);
    } else {
      console.log("--web3 account connected--");
      let temp = web3Context.account;
      if (temp) {
        setWeb3Acct(temp);
      }
    }
  }, [web3Context.account]);

  return web3Acct;
}
