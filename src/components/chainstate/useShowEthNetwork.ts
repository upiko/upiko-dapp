import React from 'react';

export default function useShowEthNetwork(web3Lib:any) {
  const [network, setNetwork] = React.useState('');

  React.useEffect(() => {
    const loadNetwork = async() => {
      let web3:any = web3Lib;

      if (web3){
        let net = await web3.eth.net.getId();
        if (net){

          if (net===5777){
            setNetwork("localhost");
          } else if (net===1){
            setNetwork("Mainnet");
          } else if (net===3){
            setNetwork("Ropsten");
          } else if (net===42){
            setNetwork("Kovan");
          } else if (net===4){
            setNetwork("Rinkeby");
          }else{
            setNetwork(net);
          }
   
        }else{
          console.error("unexpected error while trying to set network");
        }
      }
    }

    if (web3Lib){
      loadNetwork();
    }
  }, [web3Lib]);


  return network;
}