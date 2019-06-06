import React from 'react'
import useLoomEventLog, { EventType } from '../../chainstate/useLoomEventLog';
import useLoomWithConfig from '../../chainstate/useLoomWithConfig';

export default function LogUsers() {
  useLoomEventLog(useLoomWithConfig(), EventType.User);

  return (
   <React.Fragment></React.Fragment>
  )
}
