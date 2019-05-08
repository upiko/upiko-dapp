import React from "react";
import { Input, Button } from "antd";
import { Store } from "./../../common/Store";
import { withWeb3Contract } from "../chainstate/Web3StateWrap";
import { withSChain } from "../chainstate/SideChainWrap";
import { addUser } from "../../common/Actions";
import { IProvider, IUser } from "../../common/Interfaces";

function AddUserToSideChain(props: any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;
  const [name, setName] = React.useState("");
  return (
    <div className="container-fluid">
      <div className="card col-8">
        <p className="strong-p">User</p>
        <Input
          className="form-control"
          placeholder="User name"
          value={name}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const { name, value }: any = e.target;
            setName(value);
          }}
        />
        <div className="row">
          <Button
            type="dashed"
            onClick={() => {
              const ethAddr = web3State.accounts[0];
              const currentUser: IUser = {
                name,
                ethAddr,
                isProvider: false
              };
              console.log("adding user", name);
              addUser(currentUser, web3State, sChainState, dispatch);
              setName("");
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withWeb3Contract(withSChain(AddUserToSideChain));
