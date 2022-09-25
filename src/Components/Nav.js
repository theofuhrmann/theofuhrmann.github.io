import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <NavLink
          activeStyle={{ color: "rgb(203, 107, 124)" }}
          to="/"
          className="nav-link first-nav"
        >
          <li>
            <h1 className="title">
              Théo&nbsp;
              <br className="title-break" />
              Fuhrmann
            </h1>
          </li>
        </NavLink>
        <div className="wrap-links">
          <NavLink
            activeStyle={{ color: "rgb(203, 107, 124)" }}
            to="/about"
            className="wrap-link"
          >
            <li className="nav-link"> About</li>
          </NavLink>
          <NavLink
            activeStyle={{ color: "rgb(203, 107, 124)" }}
            to="/projects"
            className="wrap-link"
          >
            <li className="nav-link">Projects</li>
          </NavLink>
          <NavLink
            activeStyle={{ color: "rgb(203, 107, 124)" }}
            to="/timeline"
            className="wrap-link"
          >
            <li className="nav-link">Timeline</li>
          </NavLink>
          {/* <NavLink to="/random" className="nav-link wrap-link">
            <li>Random</li>
          </NavLink> */}
          <NavLink
            activeStyle={{ color: "rgb(203, 107, 124)" }}
            to="/contact"
            className="wrap-link"
          >
            <li className="nav-link">Contact</li>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
