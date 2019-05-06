import React, { useState } from "react";
import { Input, Button } from "antd";
import { addProvider } from "./../../common/Actions";
import { Store } from "./../../common/Store";
import { IProvider } from "./../../common/Interfaces";
import { withWeb3Contract } from "../chainstate/Web3StateWrap";
import { withSChain } from "../chainstate/SideChainWrap";


function AddProvider(props: any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [providerName, setProviderName] = useState("");
  return (
    <div>
      <Input
        placeholder="Provider Name"
        value={providerName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value }: any = event.target;
          setProviderName(value);
        }}
      />
      <Button
        onClick={() => {
          console.log("MyDisplay.addProvider.click(), value:", providerName);
          const newProvider: IProvider = { name: providerName };
          addProvider(newProvider, web3State, sChainState, dispatch);
          setProviderName("");
        }}
      >
        Add Provider
      </Button>
    </div>
  );
}


export default withWeb3Contract(withSChain(AddProvider));
