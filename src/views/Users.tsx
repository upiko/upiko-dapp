import React from 'react'
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
              <div className="container mydisplay-container">
                <ShowUserAccount />
                <AddUserToSideChain />
                <AllUsers />              
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

