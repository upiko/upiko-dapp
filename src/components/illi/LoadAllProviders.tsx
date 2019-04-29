import React from 'react'
import { Store } from "./../../common/Store";
import { fetchProviders } from "./../../common/Actions";



export default function LoadAllProviders() {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = state;
  const [ inited, setInited] = React.useState(false);
  const { providers } = state.providerState;

 /* React.useEffect(() => {
         
  }, [providers])
*/

  const loadProviders = async() => {
    //await loadChainState(dispatch);
    console.log("loadProviders()");
    fetchProviders(web3State, sChainState, dispatch);
  }


  console.log(providers);

  if (!inited){
    loadProviders();
    setInited(true);
  }

  return (
    <div className="container">
      
      <div>
        {providers.length > 0 ? JSON.stringify(providers) : "no providers"}  
      </div>
        
    </div>
  )
}
