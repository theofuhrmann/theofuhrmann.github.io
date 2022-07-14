import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" className="nav-link first-nav">
          <li>
            <h1 className="title">
              Théo
              <br />
              Fuhrmann
            </h1>
          </li>
        </Link>
        <Link to="/about" className="nav-link">
          <li>About</li>
        </Link>
        <Link to="/work" className="nav-link">
          <li>Work</li>
        </Link>
        <Link to="/random" className="nav-link">
          <li>Random</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
