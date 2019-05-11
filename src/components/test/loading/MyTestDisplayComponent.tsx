import React from "react";
import { fetchSkills } from "../../../common/Actions";
import { IWeb3State, ISideChainState, Dispatch, IChainStateProps } from "../../../common/Interfaces";
import { Store } from "../../../common/Store";



function MyTestDisplayComponent(props: any ) {
  const { web3State, sChainState} = props;
  const { state, dispatch } = React.useContext(Store);

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
