import React from "react";
import { Button } from "antd";
import { fetchProviders } from "../../common/Actions";
import { withWeb3Contract } from "../chainstate/Web3StateWrap";
import { withSChain } from "../chainstate/SideChainWrap";
import { Store } from "../../common/Store";


function ReloadProviders(props: any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;

  console.log(state);

  return (
    <div className="container mydisplay-container">
      <Button
        type="dashed"
        onClick={() => {
          console.log("reloadproviders()");
          fetchProviders(web3State, sChainState, dispatch);
        }}
      >
        Reload Providers
      </Button>
    </div>
  );
}

export default withWeb3Contract(withSChain(ReloadProviders));
