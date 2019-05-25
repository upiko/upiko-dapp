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
import { metaMaskWeb3 } from "../utils/getWeb3";
import { getSChainClient } from "../utils/getSideChain";

import SCHAIN_CONTRACT_JSON from  "./../contracts/UpikoApp.json";

export const FETCH_PROVIDERS_DATA = "FETCH_PROVIDERS_DATA";
export const ADD_PROVIDER = "ADD_PROVIDER";
export const SET_USER = "SET_USER";
export const ALL_USERS = "ALL_USERS";
export const SKILLS_LIST = "SKILLS_LIST";
export const SET_WEB3 = "SET_WEB3";
export const SET_SCHAIN = "SET_SCHAIN";
export const SET_ACCOUNT = "SET_ACCOUNT";


export const notify = (msg: string, success?: boolean) => {
  !success ? toast(msg) : toast.success(msg, { autoClose: false });
};

export const notifyError = (msg: string) => {
  toast.error(msg, { autoClose: false });
};


export const fetchNone = async (
  web3State: IWeb3State,
  sChainState: ISideChainState,
  dispatch: Dispatch
) => {
  console.log("Action.fetchAny()");
  await retrieveChainState(web3State, sChainState, dispatch);
};


export const fetchSkills = async (
  web3State: IWeb3State,
  sChainState: ISideChainState,
  dispatch: any
) => {
  console.log("Action.fetchSkills()");
  let instance = await contractInstanceFromState(sChainState);
  let skillsCount = await instance.methods.numberOfSkills().call();

  //console.log("skillsCount:", skillsCount);

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


export const retrieveChainState = async (
  web3State: IWeb3State,
  sChainState: ISideChainState,
  dispatch: Dispatch
) => {
  console.log("Action.retrieveChainState()");
  
  await initWeb3(dispatch, web3State);
  await initSChain(sChainState, dispatch);
  
  //console.log("chainstate", web3State, sChainState);
};

// could have a force flag, so that if not force, do not re-init web3
export const initWeb3 = async (
  dispatch: any,
  web3State: IWeb3State
) => {
  console.log("Action.initWeb3()");

  //TODO: if web3 is undefined, web3 = {}
  let web3 = await metaMaskWeb3();

  console.log("initWeb3(), web3:", web3);
  if (!_.isUndefined(web3) && web3) {
    web3State.web3 = web3;
    web3State.accounts = await web3.eth.getAccounts();

    dispatch({
      type: SET_WEB3,
      payload: web3State
    });

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

export const initSChain = async (
  sChainState: ISideChainState,
  dispatch: any
) => {

  console.log("Action.initSChain()");
  const contractJSON = SCHAIN_CONTRACT_JSON;
  const sChainClient = await getSChainClient(contractJSON);

  sChainState.sChainClient = sChainClient;
  sChainClient.sChainContract = contractJSON;

  dispatch({
    type: SET_SCHAIN,
    payload: sChainState
  });

};
