import React, { useState, useEffect } from 'react';

export default function useShowERC20TokenDetails(instance:any){
  //name, symbol, totalSupply
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState(-1);

  useEffect(() => {
    const loadFromContract = async() => {
      let tempName = await instance.methods.name().call();
      let tempSymbol = await instance.methods.symbol().call();
      let tempSupply = await instance.methods.totalSupply().call();

      if (tempName){
        setName(tempName);
      }else {
        console.error("the token unexepectedly does not have a name");
      }

      if (tempSymbol){
        setSymbol(tempSymbol);
      }else {
        console.error("the token unexepectedly does not have a symbol");
      }

      if (tempSupply){
        setTotalSupply(tempSupply);
      }else {
        console.error("the token unexepectedly does not have a total supply");
      }
    }

    if (instance){
      loadFromContract();
    }
    
  }, [instance]);

  return [name, symbol, totalSupply];
}