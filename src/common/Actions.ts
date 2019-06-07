import { IProvider, IUser, ILoomObject, Dispatch } from "./Interfaces";
import _ from "lodash";
import { toast } from "react-toastify";
import { ActionType } from "./Store";

export const notify = (msg: string, success?: boolean) => {
  !success ? toast(msg) : toast.success(msg, { autoClose: false });
};

export const notifyError = (msg: string) => {
  toast.error(msg, { autoClose: false });
};

/*class Example extends Component {
  toastId = null;
  customToastId = 'xxx-yyy';

  notify = () => {
    if (! toast.isActive(this.toastId)) {
      this.toastId = toast("I cannot be duplicated !");
    }

    toast("xxx-yyy cannot be duplicated", {
      toastId: customToastId
    });
  

  render(){
    return (
      <div>
        <button onClick={this.notify}>Notify</button>
      </div>
    );
  }
}*/

export const notifyWarn = (msg: string) => {
  if (!toast.isActive("nfId")) {
    toast.warn(msg, { toastId: "nfId" });
  }
};

export const fetchSkills = async (
  loomObj: ILoomObject | any,
  dispatch: Dispatch
) => {
  let skillsCount = await loomObj.instance.methods.numberOfSkills().call();
  let skills = [];

  for (let i = 0; i < skillsCount; i++) {
    let nextSkill = await loomObj.instance.methods.skillsList(i).call();
    skills.push(nextSkill);
  }
  dispatch({
    type: ActionType.SKILLS_LIST,
    payload: skills
  });

  return skills;
};

export const fetchUsers = async (
  loomObj: ILoomObject | any,
  dispatch: Dispatch
) => {
  //console.log("Action.fetchUsers()");

  let userCount = await loomObj.instance.methods.numberOfUsers().call();
  let users = [];
  for (let i = 0; i < userCount; i++) {
    let nextUser = await loomObj.instance.methods.users(i).call();
    users.push(nextUser);
  }
  dispatch({
    type: ActionType.ALL_USERS,
    payload: users
  });

  return users;
};

export const fetchUser = async (
  ethAddr: string,
  loomObj: ILoomObject | any,
  dispatch: Dispatch
): Promise<IUser | any> => {
  // console.log("Action.fetchUser(), for addr:", ethAddr);

  let inflatedUser = {};
  let id = await loomObj.instance.methods.idForEthAddr(ethAddr).call();
  let user = await loomObj.instance.methods.users(id).call();

  if (user.ethAddr === ethAddr) {
    inflatedUser = user;
  }

  dispatch({
    type: ActionType.SET_USER,
    payload: inflatedUser
  });

  return inflatedUser;
};

export const fetchProviders = async (
  loomObj: ILoomObject | any,
  dispatch: Dispatch
) => {
  let providers: Array<IProvider> = [];
  /* const { sChainClient } = sChainState;
  let instance = await contractInstanceFromState(sChainState);
  let allAddresses = await instance.methods.getAllEthAddresses().call();

  console.log("allAddresses", allAddresses);
  for (let i in allAddresses) {
    let name = await instance.methods.getProviderName(allAddresses[i]).call();
    providers.push({ name: name });
  }

  console.log("allAddresses::", allAddresses);*/
  return dispatch({
    type: ActionType.FETCH_PROVIDERS_DATA,
    payload: providers
  });
};

export const addProvider = async (
  provider: IProvider,
  loomObj: ILoomObject | any,
  dispatch: Dispatch
) => {
  /*console.log("actions.addProvider()", provider);
  console.log("eth address of user", web3State.accounts[0]);

  const { sChainClient } = sChainState;
   let instance = await contractInstanceFromState(sChainState);
  instance.methods
    .addProviderName(provider.name, web3State.accounts[0])
    .send({ from: sChainClient.getCurrentUserAddress() });*/

  console.log("sChain tx submitted - addProvider");
  return dispatch({
    type: ActionType.ADD_PROVIDER,
    payload: provider
  });
};

export const addUser = async (
  user: IUser,
  loomObj: ILoomObject | any,
  dispatch: Dispatch
) => {
  //console.log("Action.addUser():name,address,isprovider", user.name, user.ethAddr, user.isProvider);
  try {
    const tx = await loomObj.instance.methods
      .addUser(user.name, user.ethAddr, user.isProvider)
      .send({ from: loomObj.currentUserAddress });

    doNotifyTx("addUser", tx);

    return dispatch({
      type: ActionType.SET_USER,
      payload: user
    });
  } catch (error) {
    doNotifyError(error);
  }
};

export const addSkill = async (
  skillName: string,
  loomObj: ILoomObject | any,
  dispatch: Dispatch
) => {
  console.log("Action.addSkill()");

  try {
    const tx = await loomObj.instance.methods
      .addSkill(skillName)
      .send({ from: loomObj.currentUserAddress });

    doNotifyTx("addSkill", tx);
  } catch (error) {
    doNotifyError(error);
  }
};

const doNotifyError = (error: any) => {
  console.error("Error occured submitting transaction to sideChain:", error);
  notifyError("Error occured during transaction:" + error);
};

const doNotifyTx = (txName: string, txObj: any) => {
  console.log("sChain tx submitted - " + txName + ":", txObj);
  notify("tx submitted, hash:" + txObj.transactionHash);
};
