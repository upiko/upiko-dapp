import React from 'react'
import AddSkill from '../upiko/skills/AddSkill';
import useLoomWithConfig from '../chainstate/useLoomWithConfig';
import { ILoomObject } from '../../common/Interfaces';
import AddUserToSideChain from '../upiko/users/AddUserToSideChain';
import { notify } from '../../common/Actions';
import useLoomEventLog, { EventType } from '../chainstate/useLoomEventLog';

export default function EventTest() {
 

  const loomObj:ILoomObject|any = useLoomWithConfig();
  useLoomEventLog(loomObj, EventType.Skill);
  useLoomEventLog(loomObj, EventType.User);


  return (
    <React.Fragment>
      <p>Skill/User Event Test</p>
      <AddSkill />  
      <AddUserToSideChain />
    </React.Fragment>
  )
}
