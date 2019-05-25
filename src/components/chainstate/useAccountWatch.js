import React from 'react';


export default function useAccountWatch(web3State, dispatch){
  React.useEffect(() => {
    const startWatchTimer = async() => {
      console.log("starting useAccountWatch() TIMER");
    
    }
    startWatchTimer();

    return function cleanup() {
      console.log("cleaning up useAccountWatch() TIMER");
    };
    
  }, []);
}