import React, { Component } from 'react'
import {withAccount, withWeb3} from '../../chainstate/Web3Wrap';


class Web3Wrapped extends Component {
  render() {
    return (
     <React.Fragment>
       <p>Web3Wrapped</p>
       <p>{this.props.account}</p>
     </React.Fragment>
    )
  }
}

export default withWeb3(withAccount(Web3Wrapped));


