import { ISideChainState } from "../common/Interfaces";

export const contractInstanceFromState = async (
  sideChainState: ISideChainState
): Promise<any> => {
  const { sChainClient } = sideChainState;
  await sChainClient.loadContract();
  return sChainClient.getContract();
};
