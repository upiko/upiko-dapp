import React from 'react'
import ChainStateRender from '../components/chainstate/ChainStateRender';
import ShowUserAccount from '../components/upiko/users/ShowUserAccount';
import AddUserToSideChain from '../components/upiko/users/AddUserToSideChain';
import AllUsers from '../components/upiko/users/AllUsers';


export default function Users() {
  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">Users</h3>
            <div className="heading-underline"></div>
            <ChainStateRender>
              <div className="container mydisplay-container">
                <ShowUserAccount />
                <AddUserToSideChain />
                <AllUsers />
              </div>
            </ChainStateRender>
          </div>
        </div>
      </div>
    </div>
  )
}
