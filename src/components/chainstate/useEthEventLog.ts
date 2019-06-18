import React from  'react';
import { notify } from '../../common/Actions';

export enum EventType{
  TokenPurchase = "TokenPurchase"
};

export default function useEthEventLog(contractInstance:any, eventType:EventType){

  React.useEffect(() => {
    if (contractInstance){
      console.log("Adding eth event listener for:", eventType);
      if (eventType===EventType.TokenPurchase){
        contractInstance.events.Sell((err:any, evt:any) => {
          handleEvent("Sell", err, evt);
        }) 
      }else {
        console.error("Invalid EventType in useEthEventLog Hook");
      }
    }
  }, [contractInstance]);
}


const handleEvent = (name:string, err:any, evt:any) => {
  if (err){
    console.error(`error while listening to ${name} events:`, err);
  }else{
    console.log(`got ${name} event!:`, evt);
    notify(`${name} event (added): ` + evt.returnValues[0], false);
  }
}