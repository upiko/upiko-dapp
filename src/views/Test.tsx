import React from 'react'
import MyTestDisplayComponent from '../components/test/loading/MyTestDisplayComponent';
import ChainStateRender from '../components/chainstate/ChainStateRender';
import { withWeb3 } from '../components/chainstate/Web3Wrap';
import { withSChain } from '../components/chainstate/SideChainWrap';
import { Store } from '../common/Store';
import { withWeb3Contract } from '../components/chainstate/Web3StateWrap';


function Test(props:any) {
  const { state, dispatch } = React.useContext(Store);
  const { web3State, sChainState } = props;

  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">==--* test  +___=-`</h3>
            <div className="heading-underline"></div>
              <MyTestDisplayComponent dispatch={dispatch} web3State={web3State} sChainState={sChainState} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withWeb3Contract(withSChain(Test));
