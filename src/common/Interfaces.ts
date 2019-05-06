/**
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/

export type Dispatch = React.Dispatch<IAction>;

export interface IAppState {
  providerState: IProviderState;
  userState: IUser;
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

export interface IProps {
  providers: Array<IProvider>;
}

export interface IProvider {
  name: string;
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


