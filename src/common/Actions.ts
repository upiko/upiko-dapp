import { IProvider, IAction, IWeb3State, ISideChainState } from "./Interfaces";
import { contractInstanceFromState } from "./../utils/sideChainUtils";
import _ from "lodash";
import { toast } from "react-toastify";

export const FETCH_PROVIDERS_DATA = "FETCH_PROVIDERS_DATA";
export const ADD_PROVIDER = "ADD_PROVIDER";

export const notify = (msg: string, success?: boolean) => {
  !success
    ? toast(msg)
    : toast.success(msg, { autoClose: false });
};

export const notifyError = (msg: string) => {
  toast.error(msg, { autoClose: false });
};

export const fetchProviders = async (
  web3State: IWeb3State,
  sChainState: ISideChainState,
  dispatch: any
) => {
  console.log("schainState, from action", sChainState);
  console.log("web3State, from action", web3State);

  let providers: Array<IProvider> = [];
  //let instance = await contractInstanceFromState(sChainState);

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
