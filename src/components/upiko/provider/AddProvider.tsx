import React, { useState } from "react";
import { Input, Button } from "antd";
import { IProvider } from "../../../common/Interfaces";



export default function AddProvider(props: any) {
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
          //addProvider(newProvider, web3State, sChainState, dispatch);
          setProviderName("");
        }}
      >
        Add Provider
      </Button>
    </div>
  );
}


