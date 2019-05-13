import React from "react";
import {IAction, IAppState, IChainState } from "./Interfaces";
import {
  ADD_PROVIDER,
  FETCH_PROVIDERS_DATA,
  SET_USER,
  ALL_USERS,
  SKILLS_LIST
} from "./Actions";
import { any } from "prop-types";


//ETH CONTRACT
//SCHAIN CONTRACT

const initialState: IAppState = {
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

const initialChainState: IChainState = {
  web3State : {
    web3: {},
    accounts: [],
    contract: {}
  },
  sChainState: {
    sChainClient: {},
    sChainContract: {}
  }
};

export const Store = React.createContext<IAppState | any>(initialState);
export const ChainStateStore = React.createContext<IChainState | any> (initialChainState);


function initializeChainState() :IChainState {
  return initialChainState;
}



function reducer(state: IAppState, action: IAction | any): IAppState {
  switch (action.type) {
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

export function ChainStateStoreProvider(props:any): JSX.Element {
  //React.useWeb3  or initialize now
  //React.useSChain
 return ( <ChainStateStore.Provider value={{initialChainState}}>
            {props.children}
          </ChainStateStore.Provider>
        );
}
