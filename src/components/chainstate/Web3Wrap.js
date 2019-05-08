import React, { Component } from "react";
import Web3 from "web3";
import { WEB3_ACCOUNT_CHECK_INTERVAL } from "./../../config";

const Web3Context = React.createContext({});

class Web3Wrap extends Component {
  state = {};

  componentDidMount() {
    if (window.web3) {
      this.setState(
        {
          web3: new Web3(window.web3.currentProvider)
        },
        () => {
          this.getAccountInfo();
        }
      );
    }

    let interval = WEB3_ACCOUNT_CHECK_INTERVAL;
    //console.log("config account check interval is:", interval);
    let intervalId = setInterval(this.checkWeb3Account, interval);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  checkWeb3Account = async() => {
    const { account, web3 } = this.state;

    let accounts = await web3.eth.getAccounts();
    if (accounts[0] !== account){
      console.log("web3 account changed");
     this.setState({
       account: accounts[0]
     });
     //this.forceUpdate();
    }
    
  };

  getAccountInfo = async () => {
    const { web3 } = this.state;

    if (web3) {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length) {
        web3.eth.getBalance(accounts[0]).then(res => {
          this.setState({
            balance: res,
            account: accounts[0]
          });
        });
      }
    }
  };

  render() {
    const { account, balance, web3 } = this.state;
    const contextValue = { account, balance, web3 };

    if (!web3) {
      return <span>Please Install MetaMask</span>;
    }

    if (!account) {
      return <span>Please Log In to MetaMask</span>;
    }

    return (
      <Web3Context.Provider value={contextValue}>
        {this.props.children}
      </Web3Context.Provider>
    );
  }
}

function withWeb3(Child) {
  return props => (
    <Web3Context.Consumer>
      {({ web3 }) => <Child {...props} web3={web3} />}
    </Web3Context.Consumer>
  );
}

function withAccount(Child) {
  return props => (
    <Web3Context.Consumer>
      {({ account }) => <Child {...props} account={account} />}
    </Web3Context.Consumer>
  );
}

const Web3Consumer = Web3Context.Consumer;
export { Web3Consumer, withWeb3, withAccount };
export default Web3Wrap;
