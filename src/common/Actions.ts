import React from "react";
import {
  IProvider,
  IUser,
  IWeb3State,
  ISideChainState,
  Dispatch
} from "./Interfaces";
import { contractInstanceFromState } from "./../utils/sideChainUtils";
import _ from "lodash";
import { toast } from "react-toastify";
import { ChainStateStore, Store } from "./Store";
import Web3 from "web3";
import getWeb3, { metaMaskWeb3 } from "../utils/getWeb3";
import { getSChainClient } from "../utils/getSideChain";

const SCHAIN_CONTRACT_JSON = './../contracts/UpikoApp.json';

export const FETCH_PROVIDERS_DATA = "FETCH_PROVIDERS_DATA";
export const ADD_PROVIDER = "ADD_PROVIDER";
export const SET_USER = "SET_USER";
export const ALL_USERS = "ALL_USERS";
export const SKILLS_LIST = "SKILLS_LIST";
export const SET_WEB3 = "SET_WEB3";
export const SET_SCHAIN = "SET_SCHAIN";

export const notify = (msg: string, success?: boolean) => {
  !success ? toast(msg) : toast.success(msg, { autoClose: false });
};

export const notifyError = (msg: string) => {
  toast.error(msg, { autoClose: false });
};

export const fetchNone = async () => {
  console.log("Action.fetchAny()");
  await retrieveChainState();
};

export const fetchSkills = async (
  web3State: IWeb3State,
  sChainState: ISideChainState,
  dispatch: any
) => {
  console.log("Action.fetchSkills()");
  let instance = await contractInstanceFromState(sChainState);
  let skillsCount = await instance.methods.numberOfSkills().call();

  console.log("skillsCount:", skillsCount);

  let skills = [];
  for (let i = 0; i < skillsCount; i++) {
    let nextSkill = await instance.methods.skillsList(i).call();
    skills.push(nextSkill);
  }
  return dispatch({
    type: SKILLS_LIST,
    payload: skills
  });
};

export const fetchUsers = async (
  web3State: IWeb3State,
  sChainState: ISideChainState,
  dispatch: any
) => {
  //console.log("Action.fetchUsers()");
  let instance = await contractInstanceFromState(sChainState);
  let userCount = await instance.methods.numberOfUsers().call();
  let users = [];
  for (let i = 0; i < userCount; i++) {
    let nextUser = await instance.methods.users(i).call();
    users.push(nextUser);
  }
  return dispatch({
    type: ALL_USERS,
    payload: users
  });
};

export const fetchUser = async (
  ethAddr: string,
  web3State: IWeb3State,
  sChainState: ISideChainState,
  dispatch: any
) => {
  //console.log("Action.fetchUser(), for addr:", ethAddr);
  const { sChainClient } = sChainState;
  let inflatedUser = {};
  let instance = await contractInstanceFromState(sChainState);
  let id = await instance.methods.idForEthAddr(ethAddr).call();
  let user = await instance.methods.users(id).call();

  if (user.ethAddr === ethAddr) {
    inflatedUser = user;
  }

  return dispatch({
    type: SET_USER,
    payload: inflatedUser
  });
};

export const fetchProviders = async (
  web3State: IWeb3State,
  sChainState: ISideChainState,
  dispatch: any
) => {
  console.log("schainState, from action", sChainState);
  console.log("web3State, from action", web3State);

  let providers: Array<IProvider> = [];
  const { sChainClient } = sChainState;
  let instance = await contractInstanceFromState(sChainState);
  let allAddresses = await instance.methods.getAllEthAddresses().call();

  console.log("allAddresses", allAddresses);
  for (let i in allAddresses) {
    let name = await instance.methods.getProviderName(allAddresses[i]).call();
    providers.push({ name: name });
  }

  console.log("allAddresses::", allAddresses);
  return dispatch({
    type: FETCH_PROVIDERS_DATA,
    payload: providers
  });
};

export const addProvider = async (
  provider: IProvider,
  web3State: IWeb3State,
  sChainState: ISideChainState,
  dispatch: any
) => {
  console.log("actions.addProvider()", provider);
  console.log("eth address of user", web3State.accounts[0]);

  const { sChainClient } = sChainState;
  let instance = await contractInstanceFromState(sChainState);
  instance.methods
    .addProviderName(provider.name, web3State.accounts[0])
    .send({ from: sChainClient.getCurrentUserAddress() });

  console.log("sChain tx submitted - addProvider");
  return dispatch({
    type: ADD_PROVIDER,
    payload: provider
  });
};

export const addUser = async (
  user: IUser,
  web3State: IWeb3State,
  sChainState: ISideChainState,
  dispatch: any
) => {
  console.log("Action.addUser()");
  const { sChainClient } = sChainState;
  const instance = await contractInstanceFromState(sChainState);
  instance.methods
    .addUser(user.name, user.ethAddr, user.isProvider)
    .send({ from: sChainClient.getCurrentUserAddress() });

  console.log("sChain tx submitted - addUser");
  return dispatch({
    type: SET_USER,
    payload: user
  });
};

export const retrieveChainState = async () => {
  console.log("Action.retrieveChainState()");
  const { dispatch } = React.useContext(Store);
  const { web3State, sChainState } = React.useContext(ChainStateStore);

  //if (_.isUndefined(web3State)){
  //console.log("web3 undefined, attepting to initialize");
  await initWeb3(dispatch, web3State);
  //}

  //if (_.isUndefined(sChainState)){
  //console.log("sChain undefined, attepting to initialize");
  await initSChain(dispatch, sChainState);
  //}

  //either a reducer (dispatch call) or directly use context
  //await fetchUsers(web3State, sChainState, dispatch);

  console.log("chainstate", web3State, sChainState);
};


// could have a force flag, so that if not force, do not re-init web3
export const initWeb3 = async (dispatch: Dispatch, web3State: IWeb3State) => {
  console.log("Action.initWeb3()");

  //TODO: if web3 is undefined, web3 = {}

  let web3 = await metaMaskWeb3();
  if (!_.isUndefined(web3) && web3) {
    web3State.web3 = web3;
    web3State.accounts = await web3.eth.getAccounts();
  } else {
    console.error("initWeb3 - error getting web 3 (not defined)");
  }
};

/*export const loadWeb3AcctInfo = async (web3State: IWeb3State) => {
  console.log("Action.loadWeb3AccountInfo()");
  if (web3State.web3 && web3State.accounts.length) {
    let balance = await web3State.web3.eth.getBalance(web3State.accounts);  
  } else {
    console.error(
      "loadWeb3AccountInfo() - web3 or web3 accounts are not available"
    );
  }
};*/

export const initSChain = async (dispatch: Dispatch, sChainState: ISideChainState) => {
  console.log("Action.initSChain()");
  const contractJSON = SCHAIN_CONTRACT_JSON;
  const sChainClient = await getSChainClient(contractJSON);

  sChainState.sChainClient = sChainClient;
  sChainClient.sChainContract = contractJSON;

};

/*

-- interfaces
export type Dispatch = React.Dispatch<IAction>;


export interface IEpisode {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  season: number;
  number: number;
  summary: string;
  url: string;
}

export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}

// toggleFavAction = (episode: IEpisode | any, state:IState, dispatch:any): IAction => {
export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: { state: IState; dispatch: Dispatch };
  toggleFavAction: (episode: IEpisode, state: IState, dispatch: Dispatch) => IAction;
  favorites: Array<IEpisode>;
}


-- reducer
switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };


--action

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes
  });
};


export const toggleFavAction = (
  episode: IEpisode | any,
  state: IState,
  dispatch: any
): IAction => {
  const episodeInFav = state.favorites.includes(episode);

  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode
  };

  if (episodeInFav) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj.type = "REMOVE_FAV";
    dispatchObj.payload = favWithoutEpisode;
  }

  return dispatch(dispatchObj);
};*/
