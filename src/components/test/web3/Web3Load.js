import React, {useState} from 'react'
//import Web3 from 'web3';
import Web3Wrapper, {Web3Consumer} from '../../chainstate/Web3Wrap';

export default function Web3Load() {
  /*let web3, accounts;
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState({});

  if (window.web3){
    web3 = new Web3(window.web3.currentProvider);
  }

  const getInfo = async() => {
    /*web3.eth.net.isListening()
    .then(() => console.log('is connected'))
    .catch(e => console.log('Wow. Something went wrong'));*/
/*
    try{
      accounts = await web3.eth.getAccounts();
      setBalance(await web3.eth.getBalance(accounts[0]));
    }catch(e){
      console.error(e);
      setError(e);
    }
    return {accounts}
  }

  
  getInfo().then(console.log);
*/
  return (
    <React.Fragment>
       <Web3Wrapper>
         <Web3Consumer>
          {({balance}) => <p>balance: {balance}</p> }
        </Web3Consumer>
        <Web3Consumer>
          {({account}) => <p>account: {account}</p> }
        </Web3Consumer>
      </Web3Wrapper> 
    </React.Fragment>
  )
}
