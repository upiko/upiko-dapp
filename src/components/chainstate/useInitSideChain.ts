import React from "react";
import { Store } from "../../common/Store";
import { initSideChain } from "../../common/Actions";


export default function useInitSideChain() {
  const { dispatch } = React.useContext(Store);
  
  React.useEffect(() => {
    const load = async() => {
      await initSideChain(dispatch);
    }
    load();
  }, []);

}
