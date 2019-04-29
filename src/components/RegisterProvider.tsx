import * as React from "react";
import { Store } from "../common/Store";
import { addProvider } from "../common/Actions";
import { IProvider } from "../common/Interfaces";
import { withWeb3Contract } from "./chainstate/Web3StateWrap";
import { withSChain } from "./chainstate/SideChainWrap";
import { Input, Button} from "antd";


function RegisterProvider(props: any): Array<JSX.Element> | any {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [name, setName] = React.useState("");

  console.log("props", props);

  return (
    <div className="container-fluid">
      <div className="card-body col-md-6">
        <p>Detected Ethereum Address: {web3State.accounts[0]}</p>
        <p>Service Provider Name:</p>
        <Input
          className="form-control"
          placeholder="Provider name"
          value={name}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const { name, value }: any = e.target;
            setName(value);
          }}
        />
        <Button
          type="dashed"
          onClick={() => {
            const currentProvider: IProvider = { name };
            addProvider(currentProvider, web3State, sChainState, dispatch);
            setName("");
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default withWeb3Contract(withSChain(RegisterProvider));
