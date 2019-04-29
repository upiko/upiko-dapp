import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider, Store } from "./common/Store";
import { Router, RouteComponentProps } from "@reach/router";
import Main from "./views/Main";
import Register from "./views/Register";
import Test from './views/Test';
import './bootstrap.min.css';
import "antd/dist/antd.css";


const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;


ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<Main />} path="/" />
        <RouterPage pageComponent={<Register />} path="/register" />
        <RouterPage pageComponent={<Test />} path="/test" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
