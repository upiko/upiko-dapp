import React from 'react';
import MyTestDisplayComponent from '../MyTestDisplayComponent';
import ProviderList from '../../upiko/provider/ProviderList';
import ChainStateRender from '../../chainstate/ChainStateRender';
import ReloadProviders from '../../upiko/provider/ReloadProviders';
 

export default function ChainStateLoadingTest() {
  return (
    <React.Fragment>
      <p>Testing Loading Blockchain and Side Chain </p>
      <ChainStateRender>
          <MyTestDisplayComponent />
          <ReloadProviders />
          <ProviderList />
      </ChainStateRender>
    </React.Fragment>
  );
}
