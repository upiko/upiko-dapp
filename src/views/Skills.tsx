import React from "react";
import ShowAllSkills from "../components/upiko/skills/ShowAllSkills";


export default function Skills(props:any) {
  const { web3State, sChainState } = props;

//  console.log("sCState at Skills()", sChainState);

  return (
    <div className="jumbotron">
      <div className="narrow">
        <div className="col-12">
          <h3 className="heading text-center">Skills</h3>
          <div className="heading-underline"></div>   
        
          <ShowAllSkills />
         
        </div>
      </div>
    </div>
  );
}

