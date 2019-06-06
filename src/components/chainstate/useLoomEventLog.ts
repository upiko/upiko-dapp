import React from  'react';
import { ILoomObject } from '../../common/Interfaces';
import { notify } from '../../common/Actions';


export enum EventType{
  Skill = "Skill",
  User = "User"
}

export default function useLoomEventLog(loomObj:ILoomObject|any, eventType:EventType){
  
  React.useEffect(() => {
    if (loomObj){
      if (eventType===EventType.Skill){
        console.log("adding skilladded event listener");
        loomObj.instance.events.SkillAdded((err:any, evt:any) => {
          if (err){
            console.error("error while listening to skill events:", err);
          }else{
            console.log("got skill event!:", evt);
            notify("Skill event (added): " + evt.returnValues[0], false);
          }
        }) 
      }else if (eventType===EventType.User){
        console.log("adding useradded event listener");
        loomObj.instance.events.UserAdded((err:any, evt:any) => {
          if (err){
            console.error("error while listening to user events:", err);
          }else{
            console.log("got user event!:", evt);
            notify("User event (added): " + evt.returnValues[0], false);
          }
        }) 

      }else {
        console.error("Invalid EventType in userLoomEventLog Hook");
      }
    }
  }, [loomObj]);

}