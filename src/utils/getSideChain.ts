import { ISideChainState } from "./../common/Interfaces";
import LoomClient from "./LoomClient";
import {
  LOOM_NETWORK,
  LOOM_DEV_NETWORK_ID,
  LOOM_DEV_READ_URL,
  LOOM_DEV_WRITE_URL,
  LOOM_EXTDEV_NETWORK_ID,
  LOOM_EXTDEV_READ_URL,
  LOOM_EXTDEV_WRITE_URL
} from "./../config";
import { config } from "dotenv";

export const getSChainClient = async (
  contractJson: any
): Promise<any | undefined> => {
 
  try {
    let writeUrl = LOOM_DEV_WRITE_URL;
    let readUrl = LOOM_DEV_READ_URL;
    let networkId = LOOM_DEV_NETWORK_ID;

    if (LOOM_NETWORK === "EXTDEV") {
      writeUrl = LOOM_EXTDEV_READ_URL;
      readUrl = LOOM_EXTDEV_READ_URL;
      networkId = LOOM_EXTDEV_NETWORK_ID;
    }

    console.log("loading schain for network, and config params:", LOOM_NETWORK,  writeUrl, readUrl, networkId, contractJson);

    return new LoomClient(contractJson, writeUrl, readUrl, networkId);
  } catch (error) {
    alert(
      `Failed to load sidechain or  side chain contract. Check console for details.`
    );
    console.error(error);
  }
};
