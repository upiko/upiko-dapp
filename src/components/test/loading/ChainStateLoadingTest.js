import React from 'react';
import MyTestDisplayComponent from './MyTestDisplayComponent';
import ProviderList from '../../upiko/ProviderList';
import ChainStateRender from '../../chainstate/ChainStateRender';
import ReloadProviders from '../../upiko/ReloadProviders';
 

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
