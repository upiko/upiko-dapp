import React from 'react'
import { useWeb3Context } from 'web3-react';
import MyTestRW3Child from './MyTestRW3Child';


export default function MyTestReactWeb3() {
  const web3Context = useWeb3Context();

  React.useEffect(() => {
    web3Context.setFirstValidConnector(['MetaMask']);
  }, []);
 

  if (!web3Context.active && !web3Context.error) {
    console.log("Loading...");
    <React.Fragment>
      <p>Loading...</p>
    </React.Fragment>
  } else if (web3Context.error) {
    console.error("Something went wrong loading web3", web3Context.error);
    return(
      <React.Fragment>
        <p>Some error occured:{web3Context.error}</p>
      </React.Fragment>
    )
  } else {
    return (
      <div>
        <p>Web 3 loaded, with account in Parent:{web3Context.account}</p>
        <MyTestRW3Child account={web3Context.account} />
      </div>
    )
  }
  
  return(
    <React.Fragment>
      
    </React.Fragment>
  );
  
}
