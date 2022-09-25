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
              Théo&nbsp;
              <br className="title-break" />
              Fuhrmann
            </h1>
          </li>
        </Link>
        <div className="wrap-links">
          <Link to="/about" className="nav-link wrap-link">
            <li> About</li>
          </Link>
          <Link to="/projects" className="nav-link wrap-link">
            <li>Projects</li>
          </Link>
          <Link to="/timeline" className="nav-link wrap-link">
            <li>Timeline</li>
          </Link>
          {/* <Link to="/random" className="nav-link wrap-link">
            <li>Random</li>
          </Link> */}
          <Link to="/contact" className="nav-link wrap-link">
            <li>Contact</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
