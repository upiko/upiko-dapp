import React, { useState } from "react";
import { withWeb3Contract } from "../../chainstate/Web3StateWrap";
import { withAccount } from "../../chainstate/Web3Wrap";
import { withSChain } from "../../chainstate/SideChainWrap";
import { Store } from "../../../common/Store";
import { addProvider } from "./../../../common/Actions";
import { IProvider } from "../../../common/Interfaces";
import { Input, Button} from "antd";


function MyDisplayComponent(props: any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [providerName, setProviderName] = useState("");

  return (
    <div className="container mydisplay-container">
      <p>account: {props.web3State.accounts}</p>
       
      <Input
        placeholder="Provider Name"
        value={providerName}
        onChange={(event:React.ChangeEvent<HTMLInputElement>) => {
          const { name, value }: any = event.target;
          setProviderName(value);
        }}
        />
      <Button 
        onClick={() => {
          console.log("MyDisplay.addProvider.click(), value:", providerName);
          const newProvider: IProvider = { name: providerName };
          addProvider(newProvider, web3State, sChainState, dispatch);
          setProviderName('');
        }}
      >
         Add Provider
      </Button>
    </div>
  );
}

export default withWeb3Contract(withSChain(MyDisplayComponent));
