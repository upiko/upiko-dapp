import React from "react";
import ShowAllSkills from "../components/upiko/skills/ShowAllSkills";
import AddSkill from "../components/upiko/skills/AddSkill";


export default function Skills(props:any) {
 
  return (
    <div className="jumbotron">
      <div className="narrow">
        <div className="col-12">
          <h3 className="heading text-center">Skills</h3>
          <div className="heading-underline"></div>   
          <ShowAllSkills />
          <AddSkill />    
        </div>
      </div>
    </div>
  );
}

