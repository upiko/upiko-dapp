import { Client, LocalAddress, CryptoUtils, LoomProvider } from "loom-js";
import Web3 from "web3";

export default class LoomClient {
  constructor(contractJson, writeUrl, readUrl, networkId) {
    this.contractJson = contractJson;
    this.writeUrl = writeUrl;
    this.readUrl = readUrl;
    this.networkId = networkId;
  }

  async loadContract() {
    this._createClient();
    this._createCurrentUserAddress();
    this._createWebInstance();
    await this._createContractInstance();
  }

  _createClient() {
    this.privateKey = CryptoUtils.generatePrivateKey();
    this.publicKey = CryptoUtils.publicKeyFromPrivateKey(this.privateKey);

    //console.log("loading loom client with", this.networkId, this.writeUrl, this.readUrl);
    this.client = new Client(this.networkId, this.writeUrl, this.readUrl);

    this.client.on("error", msg => {
      console.error("Error on connect to client", msg);
      console.warn("Please verify if loom command is running");
    });
  }

  _createCurrentUserAddress() {
    this.currentUserAddress = LocalAddress.fromPublicKey(
      this.publicKey
    ).toString();
  }

  _createWebInstance() {
    this.web3 = new Web3(new LoomProvider(this.client, this.privateKey));
  }

  getContract() {
    return this.AppInstance;
  }

  getCurrentUserAddress() {
    return this.currentUserAddress;
  }

  async _createContractInstance() {
    const networkId = await this._getCurrentNetwork();
    //console.log("loading contract, with:", networkId);
    this.currentNetwork = this.contractJson.networks[networkId];

    if (!this.currentNetwork) {
      throw Error("Contract not deployed on DAppChain");
    }

    this.AppInstance = new this.web3.eth.Contract(
      this.contractJson.abi,
      this.currentNetwork.address,
      {
        from: this.currentUserAddress
      }
    );

  }

  /*addEventListener(fn) {
      this.onEvent = fn
    }*/

  async _getCurrentNetwork() {
    //return Promise.resolve('default')
    return await this.web3.eth.net.getId();
  }
}
