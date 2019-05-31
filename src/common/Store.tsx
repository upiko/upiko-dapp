import React from "react";
import {
  IAction,
  IAppState,
  ISideChainState
} from "./Interfaces";
import {
  ADD_PROVIDER,
  FETCH_PROVIDERS_DATA,
  SET_USER,
  ALL_USERS,
  SKILLS_LIST,
  SET_WEB3,
  SET_SCHAIN,
  SET_ACCOUNT
} from "./Actions";



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
    case SET_ACCOUNT:
      return {
        ...state,
        web3State:{
          ...state.web3State, 
          account: action.payload
        }
      }
     
    case SET_WEB3:
      return {
        ...state,
        web3State: {
          web3Context: action.payload.web3Context,
          web3: action.payload.web3,
          accounts: action.payload.accounts,
          contract: action.payload.contract,
          account: ''
        }
      };
    case SET_SCHAIN:
          return {
            ...state,
            sChainState: action.payload
          }
    case FETCH_PROVIDERS_DATA:
      return { ...state, providerState: { providers: action.payload } };
    case SKILLS_LIST:
      return { ...state, skillsList: { skills: action.payload } };
    case ALL_USERS:
      return { ...state, usersState: { users: action.payload } };
    case SET_USER:
      return { ...state, userState: action.payload };
    case ADD_PROVIDER:
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

