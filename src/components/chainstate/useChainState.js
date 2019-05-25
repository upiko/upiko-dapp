import React from 'react';
import { retrieveChainState } from '../../common/Actions';


/**
|------------------------------------------------------------------------------
| will load the web3 and sidechain state into provided objects
| and dispatch with the provided dispatch
| will also optionally load the action from (loadAction parameter if provided)
|------------------------------------------------------------------------------
*/
export default function useChainState(web3State, sChainState, dispatch, loadAction){
  React.useEffect(() => {
    const callForFetch = async() => {
      await retrieveChainState(web3State, sChainState, dispatch);
      if (loadAction){
        await loadAction(web3State, sChainState, dispatch);
      }
    }
    callForFetch();
  }, []);
}