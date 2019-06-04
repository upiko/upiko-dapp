import React from 'react'
import Web3Wrap from './Web3Wrap';
import Web3StateWrap from './Web3StateWrap';
import SideChainWrap from './SideChainWrap';
import UpikoEth from '../../../contracts/UpikoEth.json';
import UpikoApp from '../../../contracts/UpikoApp.json';


/**
|--------------------------------------------------
| Ensure that child componenets (props.children)
| use appropriate "withXXXXXXX" injections on export
| from Web3Wrap, Web3StateWrap or SideChainWrap
|--------------------------------------------------
*/
export default function ChainStateRender(props) {
  return (
    <React.Fragment>
    <Web3Wrap>
      <Web3StateWrap contractJSON={UpikoEth}>
        <SideChainWrap contractJSON={UpikoApp}>
         {props.children}
        </SideChainWrap>
      </Web3StateWrap>
    </Web3Wrap>
  </React.Fragment>
  )
}
