import React, { Component } from "react";
import { getSChainClient } from "./../../utils/getSideChain";

const SChainContext = React.createContext({});

//sChainClient: any;
//sChainContract: any;

/**
|--------------------------------------------------
|  HOC react component
|  Initializes contract from props,  
   for sidechain and gives a sChainClient
|--------------------------------------------------
*/

class SideChainWrap extends Component {
  state = {};

  async componentDidMount() {
    const { contractJSON } = this.props;
    const sChainClient = await getSChainClient(contractJSON);
    this.setState(
      {
        sChainClient,
        sChainContract: contractJSON
      });

    //console.log("loading sidechainwrap.CDM(), client, contract:", sChainClient, contractJSON);
  }

  render() {
    const {sChainClient, sChainContract} = this.state;
    const sideChainState = {
      sChainClient: sChainClient,
      sChainContract: sChainContract
    }

    const contextValue = {
      sChainState: sideChainState
    }

    return(
      <SChainContext.Provider value={contextValue}>
        {this.props.children}
      </SChainContext.Provider>
    ) 
  }
}


function withSChain(Child){
  return (props) => (
    <SChainContext.Consumer>
      {({sChainState}) => <Child {...props} sChainState={sChainState} />}
    </SChainContext.Consumer>
  )
}


const SChainWrapConsumer = SChainContext.Consumer;
export { SChainWrapConsumer, withSChain };
export default SideChainWrap;
