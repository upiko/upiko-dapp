import { IWeb3State } from "../common/Interfaces";
import getWeb3, {getDeployedNetwork} from "./getWeb3";


export const web3PayloadForContract = async(contractJson:any):Promise<IWeb3State|undefined> => {
  
  try{  
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = getDeployedNetwork(contractJson, networkId);

    const instance = new web3.eth.Contract(
      contractJson.abi,
      deployedNetwork && deployedNetwork.address
    );
  
    return {web3, accounts, contract:instance};

  } catch (error) {
    // Catch any errors for any of the above operations.
    alert(
      `Failed to load web3, accounts, or contract. Check console for details.`,
    );
    console.error(error);
  }
}
