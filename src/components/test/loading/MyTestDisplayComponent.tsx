import React from "react";
import { fetchSkills } from "../../../common/Actions";
import { IWeb3State, ISideChainState, Dispatch } from "../../../common/Interfaces";


interface IChainStateProps{
  web3State: IWeb3State;
  sChainState: ISideChainState;
  dispatch: Dispatch;
}


function MyTestDisplayComponent(props: IChainStateProps) {
  const { web3State, sChainState, dispatch } = props;

  React.useEffect(() => {
    console.log("MyTestDisplayComponent.useEffect()");
    console.log("props=", props);
    fetchSkills(web3State, sChainState, dispatch);
  }, []);


  return (
    <div className="container mydisplay-container">
      <p>skills</p>

      <p>sos</p>
    </div>
  );
}

export default MyTestDisplayComponent;
