import React from "react";

import ShowUserAccount from '../../upiko/ShowUserAccount';
import AddUserToSideChain from "../../upiko/AddUserToSideChain";



function MyTestDisplayComponent(props: any) {

  return (
    <div className="container mydisplay-container">
     
      <ShowUserAccount />

      <AddUserToSideChain />
       
    </div>
  );
}

export default MyTestDisplayComponent;
