import React from "react";
import MyTestDisplayChild from "./web3/MyTestDisplayChild";
import { Store } from "../../common/Store";
import { fetchSkills, initWeb3, useWeb3, retrieveChainState, fetchUser } from "../../common/Actions";
import useChainState from "../chainstate/useChainState";
import { useWeb3Context } from "web3-react";
import ShowUserAccount from "../upiko/users/ShowUserAccount";
import AddUserToSideChain from "../upiko/users/AddUserToSideChain";

export default function MyTestDisplayComponent(props: any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = state;
  const web3Context = useWeb3Context();
  const [lastAcct, setLastAcct] = React.useState('');

  /*  React.useEffect(() => {
    context.setFirstValidConnector(['MetaMask'])
  }, [])*/

  React.useEffect(() => {
    web3State.web3Context = web3Context;
    //initWeb3(web3State, dispatch);
    retrieveChainState(web3State, sChainState, dispatch);
  }, []);

  /*
  React.useEffect(() => {
    console.log("MyTest.useEffect2()");
    web3State.web3Context = web3Context;
    const currAcct = web3Context.account;
    useWeb3(web3State, dispatch);
    if (lastAcct !== currAcct){
      console.log("acct changed")
      if (currAcct){
        setLastAcct(currAcct);
      }
    }
  }, []);*/


  React.useEffect(() => {
    console.log("MyTest.useEffect3()");
    const currAcct = web3Context.account;

    console.log("last=", lastAcct);
    console.log("current=", currAcct);

    if (lastAcct !== currAcct){
      console.log("acct changed, or first run")
      if (currAcct){
        setLastAcct(currAcct);
        fetchUser(currAcct, web3State, sChainState, dispatch);
      } else {
        console.error("trying to set last, but there is not value");
      }
    }

  })

  //useChainState(web3State, sChainState, dispatch, fetchSkills);
  //useAccountWatch(web3State, dispatch, sChainState);

  const { skills } = state.skillsList;

  return (
    <div className="container mydisplay-container">
      <p>skills: {skills}</p>
      <p>sos</p>
      <MyTestDisplayChild />
      <p>last account:{lastAcct}</p>
      <p>web3 account:{web3Context.account}</p>
      
    </div>
  );
}
