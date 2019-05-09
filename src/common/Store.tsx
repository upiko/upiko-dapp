import React from "react";
import { IProviderState, IAction, IWeb3State, IAppState } from "./Interfaces";
import { ADD_PROVIDER, FETCH_PROVIDERS_DATA, SET_USER, ALL_USERS } from "./Actions";

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
  }
};

export const Store = React.createContext<IAppState | any>(initialState);

function reducer(state: IAppState, action: IAction | any): IAppState {
  switch (action.type) {
    case FETCH_PROVIDERS_DATA:
      return { ...state, providerState: {providers: action.payload} };
    case ALL_USERS:
      return {...state, usersState: {users: action.payload}};
    case SET_USER:
      return {
        ...state,
        userState: action.payload
      };
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
