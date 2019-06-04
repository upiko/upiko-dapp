import { ConnectionInfo } from "ethers/utils";
import Web3 from "web3";

/**
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/

export type Dispatch = React.Dispatch<IAction>;

/*
if (process.env.NETWORK == 'extdev') {
      writeUrl = 'ws://extdev-plasma-us1.dappchains.com:80/websocket'
      readUrl = 'ws://extdev-plasma-us1.dappchains.com:80/queryws'
      networkId = 'extdev-plasma-us1'
    }*/
export interface ILoomConnectionInfo {
  networkAlias: string;  // LOCAL_DEV | TEST | EXTDEV | PROD
  writeUrl: string;    // 'ws://127.0.0.1:46658/websocket';
  readUrl: string;    //  'ws://127.0.0.1:46658/queryws';
  networkId : string; //  'default' 
}

export interface ILoomObject {
  contract: any;
  client: any;
  privateKey: Uint8Array|any;
  publicKey: Uint8Array|any;
  currentUserAddress: string;
  web3: any;
  instance: any;
  currentNetwork: string;

  connectionInfo: ILoomConnectionInfo|any;
}


export interface IAppState {
  web3State: IWeb3State;
  sChainState: ISideChainState;
  providerState: IProviderState;
  userState: IUser;
  usersState: IUsers;
  skillsList: ISkillsList;
}

export interface IChainState{
  web3State: IWeb3State;
  sChainState: ISideChainState;
}


export interface IWeb3State {
  web3Context: any;
  web3: any;
  accounts: any;
  contract: any;
  account: string;
}

export interface ISideChainState {
  sChainClient: any;
  sChainContract: any;
}


export interface ISkillsList {
  skills: Array<ISkill>;
}

export interface ISkill {
  skillName: string;
}

export interface IProvider {
  name: string;
}

export interface IUsers{
  users: Array<IUser>;
}  

export interface IUser {
  name: string;
  ethAddr: string;
  isProvider: boolean;
}

export interface IProviderState {
  providers: Array<any>;
}

export interface IAction {
  type: string;
  payload: IAppState;
}


