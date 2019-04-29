import React from 'react';
import MyDisplayComponent from './MyDisplayComponent';
import ProviderList from '../../ProviderList';
import ChainStateRender from '../../chainstate/ChainStateRender';


export default function ChainStateLoadingTest() {
  return (
    <React.Fragment>
      <p>Testing Loading Blockchain and Side Chain </p>
      <ChainStateRender>
          <MyDisplayComponent />
          <ProviderList />
      </ChainStateRender>
    </React.Fragment>
  );
}
