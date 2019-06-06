import React from "react";
import ShowAllSkills from "../components/upiko/skills/ShowAllSkills";
import AddSkill from "../components/upiko/skills/AddSkill";
import LogSkills from "../components/upiko/skills/LogSkills";


export default function Skills(props:any) {
 
  return (
    <div className="jumbotron">
      <div className="narrow">
        <div className="col-12">
          <h3 className="heading text-center">Skills</h3>
          <div className="heading-underline"></div>   
          <LogSkills />
          <ShowAllSkills />
          <AddSkill />    
        </div>
      </div>
    </div>
  );
}

