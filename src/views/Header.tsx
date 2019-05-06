import React from 'react'
import { Link } from '@reach/router';

export default function Header() {
  return (
    <React.Fragment>
        <header className="header">
            <div>
                <h4>upiko</h4>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/createsos">CreateSos</Link>
                <Link to="/test">--=-*!--*-</Link>
            </div>
        </header>
    </React.Fragment>
  )
}
