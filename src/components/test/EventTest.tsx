import React from 'react'
import AddSkill from '../upiko/skills/AddSkill';
import useLoomWithConfig from '../chainstate/useLoomWithConfig';
import { ILoomObject } from '../../common/Interfaces';

export default function EventTest() {
  /*
  this.upikoAppInstance.events.NewValueSet({ filter: { _value: 10 }}, (err, event) => {
    if (err) console.error('Error on event', err)
    else {
      if (this.onEvent) {
        this.onEvent(event.returnValues)
      }
    }
  */

  const loomObj:ILoomObject|any = useLoomWithConfig();

 /* React.useEffect(() => {
    if (loomObj){
      console.log("got loom");
      loomObj.instance.events.SkillAdded((err:any, evt:any) => {
        if (err) console.error('Error on event', err)
        else {
          console.log("got event")
        }

      }
  }, [loomObj])*/

  React.useEffect(() => {
    if (loomObj){
       loomObj.instance.events.SkillAdded((err:any, evt:any) => {
        if (err){
          console.error("error while listening to skill events:", err);
        }else{
          console.log("got skill event!:", evt);
        }
       }) 
    }
  }, [loomObj]);

  return (
    <React.Fragment>
      <p>Skill Event Test</p>
      <AddSkill />  
    </React.Fragment>
  )
}
