import React from "react";
import useReactWeb3 from "../chainstate/useReactWeb3";
import useReactWeb3Library from "../chainstate/useReactWeb3Library";
import tokenContract from "./../../contracts/PikoToken.json";
import saleContract from "./../../contracts/PikoTokenSale.json";
import useEthContract from "../chainstate/useEthContract";
import { toEth } from "../../utils/EthUtil";



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
            currently have <span>{pikos > 1000000 ? `${pikos/1000000}M` : `${pikos}`}</span> PIKO.
          </p>
          <br />
          <p>Your ethereum address is: {ethAddr}</p>
        </div>
      </div>
    </div>
  );
}

