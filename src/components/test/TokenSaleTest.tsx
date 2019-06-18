import React from "react";
import useReactWeb3 from "../chainstate/useReactWeb3";
import useReactWeb3Library from "../chainstate/useReactWeb3Library";
import tokenContract from "./../../contracts/PikoToken.json";
import saleContract from "./../../contracts/PikoTokenSale.json";
import useEthContract from "../chainstate/useEthContract";
import { toEth, toWei } from "../../utils/EthUtil";
import { Input, Button, Card, Progress } from "antd";
import useEthEventLog from "../chainstate/useEthEventLog";
import { EventType } from "../chainstate/useEthEventLog";



export default function TokenSaleTest() {
  const ethAddr = useReactWeb3();
  const lib = useReactWeb3Library();
  const tokenInstance = useEthContract(lib, tokenContract);
  const tokenSaleInstance = useEthContract(lib, saleContract);
  const [pikos, setPikos] = React.useState(-1);
  const [salePrice, setSalePrice] = React.useState(-1);
  const [toBuy, setToBuy] = React.useState(0);

  const [tokensSold, setTokensSold] = React.useState(0);
  const [tokensAvailable, setTokensAvailable] = React.useState(0);
  const [saleAddress, setSaleAddress] = React.useState('');


  //load current user balance
  React.useEffect(() => {
    const loadBalance = async() => {
      //console.log("have a tokenInstance");
      console.log("addr of token contract" + tokenInstance.address);
      let tempBalance = await tokenInstance.methods.balanceOf(ethAddr).call({from: ethAddr});
      if (tempBalance){
        setPikos(tempBalance);
      }
    }
    if (tokenInstance && lib){
      loadBalance();
    }
  }, [tokenInstance, lib]);


  //load sale contract details
  React.useEffect(() => {
    const loadDetails = async() => {
      let tempPrice = await tokenSaleInstance.methods.tokenPrice().call();
     
      if (tempPrice){
        setSalePrice(toEth(lib, tempPrice));
      }

      let tempSold = await tokenSaleInstance.methods.tokensSold().call();
      console.log("tempSold=", tempSold);
      if (tempSold){
        setTokensSold(tempSold);
      }
      console.log("tokenSaleAddress:", tokenSaleInstance.address);
    }
    if (tokenSaleInstance && lib){
      loadDetails();
    }
  }, [tokenSaleInstance, lib]);



  useEthEventLog(tokenSaleInstance, EventType.TokenPurchase);



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
            Token price is <span>{salePrice}</span> Ether.
          </p>
          <p> 
              You currently have <span>{pikos > 1000000 ? `${pikos/1000000}M` : `${pikos}`}</span> PIKO.
          </p>
         
          <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title="Purchase Tokens" bordered={false} >
            <p className="strong-p">Enter number of PIKO tokens to purchase {toBuy > 0 ? `[buying ${toBuy} for ${toBuy * salePrice} Eth]` : ''}</p>
            <Input
              id="purchase-input"
              className="form-control"
              placeholder="Number of tokens"
              value={toBuy}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                const { name, value }: any = e.target;
                setToBuy(value);
              }}
            />
            <div className="row">
              <Button
                type="dashed"
                onClick={async() => {

                  //const buyVal = toWei(lib, toBuy);

                  console.log(`attempting to buy ${toBuy} tokens`);
                  //console.log("buyVal (number of tokens in wei?):", buyVal);
                  console.log("saleprice:", salePrice);
                  

                  const tx = await tokenSaleInstance.methods.buyTokens(toBuy).
                    send({ from: ethAddr,
                          value: toBuy * toWei(lib, salePrice),
                          gas: 500000
                    })
                
              }}
              >
                Buy
              </Button>
          </div>
          </Card>
        </div>

          <p>Your ethereum address is: {ethAddr}</p>
          <br />
          <hr />
          <p>Tokens Sold</p>
          <Progress percent={50} status="active" />
        </div>
        
      </div>
    </div>
  );
}

