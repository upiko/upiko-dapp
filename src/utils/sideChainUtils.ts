import { ISideChainState } from "../common/Interfaces";


export const contractInstanceFromState = async (
  sideChainState: ISideChainState
): Promise<any> => {

  console.log("in sideChainUtils.contractInstanceFromState()", sideChainState);
  const { sChainClient } = sideChainState;
  await sChainClient.loadContract();
  return sChainClient.getContract();
};
