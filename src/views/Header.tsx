import React from 'react';


export default function Header() {
  return (
    <React.Fragment>
       <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/"><p className="logo-text">upiko</p></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarResponsive">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/users">Users</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/providers">Providers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/soses">Soses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/test">Test</a>
                </li>
              </ul>
            </div>
        </nav>
    </React.Fragment>
  )
}
