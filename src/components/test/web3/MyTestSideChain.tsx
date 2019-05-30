import React from 'react'
import { SideChainContext } from '../../../common/Store';
import useSideChain from './useSideChain';

export default function MyTestSideChain() {
  //const sideChainContext = React.useContext(SideChainContext);

  const s2 = useSideChain();

  return (
    <React.Fragment>
      <p className="lead">Side chain context info -></p>
      <p>sideChainContext.sideChain: {s2.sideChain}</p>
      <p>sideChainContext.stability: {s2.stability}</p>
    </React.Fragment>
  )
}
