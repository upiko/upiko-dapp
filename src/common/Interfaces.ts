/**
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/

export type Dispatch = React.Dispatch<IAction>;

export interface IAppState {
  providerState: IProviderState;
  userState: IUser;
  usersState: IUsers;
  skillsList: ISkillsList;
}


export interface IWeb3State {
  web3: any;
  accounts: any;
  contract: any;
}

export interface ISideChainState {
  sChainClient: any;
  sChainContract: any;
}


export interface IChainStateProps{
  web3State: IWeb3State;
  sChainState: ISideChainState;
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


