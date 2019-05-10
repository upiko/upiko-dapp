import React from "react";
import ShowAllSkills from "../components/upiko/skills/ShowAllSkills";
import { withWeb3Contract } from "../components/chainstate/Web3StateWrap";
import { withSChain } from "../components/chainstate/SideChainWrap";


function Skills(props:any) {
  const { web3State, sChainState } = props;

  return (
    <div className="jumbotron">
      <div className="narrow">
        <div className="col-12">
          <h3 className="heading text-center">Skills</h3>
          <div className="heading-underline"></div>   
             <ShowAllSkills web3State={web3State} sChainState={sChainState} />
        </div>
      </div>
    </div>
  );
}

export default withWeb3Contract(withSChain(Skills));
