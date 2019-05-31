import React from 'react'
import { useWeb3Context } from 'web3-react';


export default function Web3UserContainer(props) {

  
  if (!web3Context.active && !web3Context.error) {
    console.log("Loading...");
    return (<React.Fragment>
      <p>Loading...</p>
     </React.Fragment>
    );
  } else if (web3Context.error) {
    console.error("Something went wrong loading web3", web3Context.error);
    return(
      <React.Fragment>
        <p>Some error occured:{web3Context.error}</p>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        {props.children}
      </React.Fragment>
    );
  }
    
}
