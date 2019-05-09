import React from "react";
import ChainStateRender from "../components/chainstate/ChainStateRender";
import ShowAllSkills from "../components/upiko/skills/ShowAllSkills";

export default function Skills() {
  return (
    <div className="jumbotron">
      <div className="narrow">
        <div className="col-12">
          <h3 className="heading text-center">Skills</h3>
          <div className="heading-underline"></div>
          <ChainStateRender>
             <ShowAllSkills />
          </ChainStateRender>
        </div>
      </div>
    </div>
  );
}
