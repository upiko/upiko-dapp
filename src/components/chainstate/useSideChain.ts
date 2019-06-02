import React from 'react';
import { Store } from '../../common/Store';
import { IChainState, ISideChainState } from '../../common/Interfaces';

export default function useSideChain():ISideChainState {
  const { state } = React.useContext(Store);

  return state.sChainState;
}