import React, { Component } from "react";
import { withWeb3, withAccount } from "./Web3Wrap";


const Web3ContractContext = React.createContext({});
/**
|--------------------------------------------------
|  HOC react component
|  Initializes contract from props,  
   for web3 given from parent Web3Wrap component
|--------------------------------------------------
*/
class Web3StateWrap extends Component {
  state = {
    instance: {}
  };

  async componentDidMount() {
    const { web3, contractJSON } = this.props;
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = contractJSON.networks[networkId];
    const instance = new web3.eth.Contract(
      contractJSON.abi,
      deployedNetwork && deployedNetwork.address
    );
    //console.log("WebStateWrap.CDM() web3version, networkId, deployednet, instance:", web3.version, networkId, deployedNetwork, instance);
    this.setState({
      instance
    })
  }

  render() {
    const { web3, account } = this.props;
    const accounts = [account];

    const web3State = {
      web3,
      accounts,
      contract: this.state.instance
    }

    const contextValue = {
      web3State : web3State
    };

    return (
      <Web3ContractContext.Provider value={contextValue}>
        {this.props.children}
      </Web3ContractContext.Provider>
    );
  }
}

function withWeb3Contract(Child){
  return (props) => (
    <Web3ContractContext.Consumer>
      {({web3State}) => <Child {...props} web3State={web3State} />}
    </Web3ContractContext.Consumer>
  )
}


const Web3ContractWrappedConsumer = Web3ContractContext.Consumer;
export { Web3ContractWrappedConsumer, withWeb3Contract };
export default withWeb3(withAccount(Web3StateWrap));
