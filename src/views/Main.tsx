import React from "react";
import { Store } from "./../common/Store";
import Header from "./Header";
import Footer from "./Footer";


const ProviderList = React.lazy<any>(() =>
  import("./../components/ProviderList")
);

export default function Main() {
  const { state, dispatch } = React.useContext(Store);
  
  return (
      <React.Fragment>
        <React.Suspense fallback={<div>loading...</div>}>
          <section className="episode-layout">
            <div className="container">
              <div className="lead">Main</div>
            </div>
          </section>
        </React.Suspense>
      </React.Fragment>
  );
}
