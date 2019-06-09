import React from 'react'
import Web3Provider from 'web3-react';
import useWeb3Config from '../components/chainstate/useWeb3Config';
import EventTest from '../components/test/EventTest';
import ShowUserAccount from '../components/upiko/users/ShowUserAccount';


/*
 this.contract.addEventListener((v) => {
      this.setState({ skillsCount: v._value })
    })
  }


  
    this.upikoAppInstance.events.SkillAdded((err, event) => {
      if (err) console.error('Error on event', err)
      else {
        if (this.onEvent) {
          this.onEvent(event.returnValues)
        }
      }
    });



  addEventListener(fn) {
    this.onEvent = fn
  }


*/


export default function Test() {
  const web3Config = useWeb3Config();
  
  //useEventListener('mousemove', handler);

  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">==--* test  +___=-`</h3>
            <div className="heading-underline"></div>
            <Web3Provider connectors={web3Config.connectors} libraryName={web3Config.libraryName} web3Api={web3Config.web3Api}> 
              <EventTest /> 
              <ShowUserAccount />
            </Web3Provider>
          </div>
        </div>
      </div>
    </div>
  )
}
