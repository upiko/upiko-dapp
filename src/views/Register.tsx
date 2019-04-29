import React, { useState, lazy } from "react";
import { Store } from "./../common/Store";
import ChainStateRender from "../components/chainstate/ChainStateRender";
import Header from "./Header";
import Footer from "./Footer";


const RegisterProvider = React.lazy(() =>
  import("./../components/RegisterProvider")
);

export default function Register() {
  const { state, dispatch } = React.useContext(Store);
    
  
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ChainStateRender>
          <RegisterProvider />
        </ChainStateRender>
      </React.Suspense>
    </React.Fragment>
  );
}
