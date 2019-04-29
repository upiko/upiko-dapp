import React from "react";
import { Store } from "./common/Store";
import { Link } from "@reach/router";
import Header from "./views/Header";
import Footer from "./views/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <Header />
        <ToastContainer />
        {props.children}
      <Footer />
    </React.Fragment>
  );
}
