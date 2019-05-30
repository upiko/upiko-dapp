import React from 'react';
import { SideChainContext } from '../../../common/Store';

export default function useSideChain() {
  const sideChainContext = React.useContext(SideChainContext);
  return sideChainContext;
}