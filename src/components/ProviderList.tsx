import React, { useState } from "react";
import { Store } from "./../common/Store";
import { withWeb3Contract } from "./chainstate/Web3StateWrap";
import { withSChain } from "./chainstate/SideChainWrap";
import { fetchProviders } from "../common/Actions";
import { List, Typography } from "antd";
import { IProvider } from "./../common/Interfaces";

function ProviderList(props: any): Array<JSX.Element> | any {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [inited, setInited] = useState(false);

  /* React.useEffect(() => {
    fetchProviders(web3State, sChainState, dispatch);
    setInited(true)
  }, [inited])*/

  const loadProviders = async () => {
    fetchProviders(web3State, sChainState, dispatch);
    setInited(true);
  };


  const providerStateToArray = (providerState: any): Array<IProvider> => {
    let providersArray: Array<IProvider> = [];
    console.log(providerState);

    for (let i in providers){
      providersArray.push(providers[i]);
    }
    return providersArray;
  };


  if (!inited && sChainState.sChainClient) {
    loadProviders();
  }


  console.log("props", props);
  const { providers } = state.providerState;
  console.log("providers", providers);

  let providersArray: Array<IProvider> = providerStateToArray(providers);

  return (
    <React.Fragment>
      <List
        header="Providers"
        bordered
        dataSource={providersArray}
        renderItem={item => (
          <List.Item>
            {item.name}
          </List.Item>
        )}
      />
    </React.Fragment>
  );
}

export default withWeb3Contract(withSChain(ProviderList));

