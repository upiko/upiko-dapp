import React from "react";
import { useWeb3Context } from "web3-react";

export default function useReactWeb3Library() {
  const web3Context = useWeb3Context();
  const [library, setLibrary] = React.useState(null);

  React.useEffect(() => {
    web3Context.setFirstValidConnector(["MetaMask"]);
  }, []);

  React.useEffect(() => {
    //console.log("ShowUserAccount.useEffect([context.account])");
    if (!web3Context.active && !web3Context.error) {
      //notifyWarn("loading or not signed in to web3");
    } else if (web3Context.error) {
      console.error("context is in error", web3Context.error);
    } else {
      let temp = web3Context.library;
      if (temp) {
        setLibrary(temp);
      }
    }
  }, [web3Context.library]);

  return library;
}
