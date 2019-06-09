import React from "react";
import { Input, Button, Card } from "antd";
import { Store } from "../../../common/Store";
import { addUser } from "../../../common/Actions";
import useReactWeb3 from "../../chainstate/useReactWeb3";
import { IUser } from "../../../common/Interfaces";
import useLoomWithConfig from "../../chainstate/useLoomWithConfig";


export default function AddUserToSideChain(props: any) {
  const {dispatch} = React.useContext(Store);
  const [name, setName] = React.useState("");
  const ethAccount = useReactWeb3();
  const loomObj = useLoomWithConfig();
  
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Add User" bordered={false} >
        <p className="strong-p">Enter details for new user</p>
        <Input
          id="add-user-input"
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
              //const ethAddr = web3State.accounts[0];
              console.log("account:", ethAccount);
              let ethAddr = '' 
              if (ethAccount){
                ethAddr = ethAccount;
              } else {
                console.error("something went wrong, web3account expected, but was not available")
              }
              
              const currentUser: IUser = {
                name,
                ethAddr,
                isProvider: false
              };
              console.log("adding user", name);
              addUser(currentUser, loomObj, dispatch);
              setName("");
            }}
          >
            Create
          </Button>
      </div>
      </Card>
    </div>
  );
}

