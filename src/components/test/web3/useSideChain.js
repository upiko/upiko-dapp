import React from 'react';
import { Store } from '../../../common/Store';


export default function useSideChain() {
  const { state } = React.useContext(Store);

  console.log ("useSideChain()", state.sChainState);

  return state.sChainState;
}
