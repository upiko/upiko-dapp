import React from 'react';


export default function useEthContract(web3: any, contractJson: any): any {
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

