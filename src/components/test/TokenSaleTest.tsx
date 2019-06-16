import React from "react";
import useReactWeb3 from "../chainstate/useReactWeb3";
import useReactWeb3Library from "../chainstate/useReactWeb3Library";
import tokenContract from "./../../contracts/PikoToken.json";
import saleContract from "./../../contracts/PikoTokenSale.json";
import Web3 from "web3";


export default function TokenSaleTest() {
  const ethAddr = useReactWeb3();
  const lib = useReactWeb3Library();
  const tokenInstance = useEthContract(lib, tokenContract);
  const tokenSaleInstance = useEthContract(lib, saleContract);
  const [pikos, setPikos] = React.useState(-1);
  const [salePrice, setSalePrice] = React.useState(-1);
  

  //load current user balance
  React.useEffect(() => {
    const loadBalance = async() => {
      console.log("have a tokenInstance");
      let tempBalance = await tokenInstance.methods.balanceOf(ethAddr).call({from: ethAddr});
      if (tempBalance){
        setPikos(tempBalance);
      }
      let temp2:any = lib;
      if (temp2){
        console.log("lib", temp2.version);
      }
      //let supply = await tokenInstance.methods.totalSupply().call({from: ethAddr});
    }
    if (tokenInstance && lib){
      loadBalance();
    }
  }, [tokenInstance, lib]);


  //load sale contract details
  React.useEffect(() => {
    const loadDetails = async() => {
      console.log("have a tokenSaleInstance");
      let tempPrice = await tokenSaleInstance.methods.tokenPrice().call();
      console.log("tokenprice:", tempPrice);

      if (tempPrice){
        setSalePrice(toEth(lib, tempPrice));
      }
    }
    if (tokenSaleInstance && lib){
      loadDetails();
    }
  }, [tokenSaleInstance, lib]);



  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center">tokenSale test</h3>
          <hr />
          <br />
        </div>
        <div id="content" className="text-center">
          <p>
            Introducing " PIKO Token" Token price is <span>{salePrice}</span> Ether. You
            currently have <span>{pikos > 1000000 ? `pikos` : `pikos`}</span> PIKO.
          </p>
          <br />
          <p>Your ethereum address is: {ethAddr}</p>
        </div>
      </div>
    </div>
  );
}


/*function toEth(wei:any):any {
  return Web3. utils.fromWei('1000000000000000000', 'ether');
}*/

function toEth(web3:any, weiVal:any):any {
  return web3.utils.fromWei(weiVal, 'ether');
}

function useEthContract(web3: any, contractJson: any): any {
  const [instance, setInstance] = React.useState(null);
  //console.log("UseEthContract, web3:", web3);
  //console.log("UseEthContract, contractJson:", contractJson);


  React.useEffect(() => {
    const initWithContract = async() => {
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = contractJson.networks[networkId];
      //console.log(deployedNetwork.address);
      const instance = new web3.eth.Contract(
        contractJson.abi,
        deployedNetwork && deployedNetwork.address
      );
      if (instance){
        setInstance(instance);
      }else{
        console.error("expected a contract instance, but it was unexpectedly not set");
      }
    }
    if (web3){
      initWithContract();
    }
  }, [web3])

  return instance;
}

