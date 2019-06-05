import React from "react";
import {
  IAction,
  IAppState,
  ISideChainState
} from "./Interfaces";


export enum ActionType {
  ADD_PROVIDER = "upiko/ADD_PROVIDER",
  FETCH_PROVIDERS_DATA = "upiko/FETCH_PROVIDERS_DATA",
  SET_USER = "upiko/SET_USER",
  ALL_USERS = "upiko/ALL_USERSR",
  SKILLS_LIST = "upiko/SKILLS_LIST",
  SET_ACCOUNT = "upiko/SET_ACCOUNT"
}



const initialState: IAppState = {
  web3State: {
    web3Context: {},
    web3: {},
    accounts: [],
    contract: {},
    account: ''
  },
  sChainState: {
    sChainClient: {},
    sChainContract: {}
  },
  providerState: {
    providers: []
  },
  userState: {
    name: "",
    ethAddr: "",
    isProvider: false
  },
  usersState: {
    users: []
  },
  skillsList: {
    skills: []
  }
};




export const Store = React.createContext<IAppState | any>(initialState);

function reducer(state: IAppState, action: IAction | any): IAppState {
  switch (action.type) {
    case ActionType.SET_ACCOUNT:
      return {
        ...state,
        web3State:{
          ...state.web3State, 
          account: action.payload
        }
      }
    case ActionType.FETCH_PROVIDERS_DATA:
      return { ...state, providerState: { providers: action.payload } };
    case ActionType.SKILLS_LIST:
      return { ...state, skillsList: { skills: action.payload } };
    case ActionType.ALL_USERS:
      return { ...state, usersState: { users: action.payload } };
    case ActionType.SET_USER:
      return { ...state, userState: action.payload };
    case ActionType.ADD_PROVIDER:
      return {
        ...state,
        providerState: {
          providers: [...state.providerState.providers, action.payload]
        }
      };
    default:
      return state;
  }
}


export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}

