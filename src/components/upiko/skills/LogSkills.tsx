import React from 'react'
import useLoomWithConfig from '../../chainstate/useLoomWithConfig';
import useLoomEventLog, { EventType } from '../../chainstate/useLoomEventLog';

export default function LogSkills() {
  useLoomEventLog(useLoomWithConfig(), EventType.Skill);
  
  return (
    <React.Fragment></React.Fragment>
  )
}
