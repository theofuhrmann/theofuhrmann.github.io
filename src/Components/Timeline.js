import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

function Timeline() {
  return (
    <>
      <Helmet>
        <title>Théo's Portfolio | Timeline </title>
      </Helmet>
      <div className="content">
        <h1 style={{ color: "rgb(205, 111, 76)" }}>Timeline</h1>
        <ul className="content-ul">
          <li className="content-li">
            <h3> DISCOVERFY </h3>
            <p>
              For my final thesis for my Computer Science degree I trained
              various machine learning models with gathered CVE data to predict
              the potential exploitability of cybervulnerabilities.
              <br />
              <br />
            </p>
            <a
              className="link"
              href="https://github.com/theofuhrmann/cybervulnerability-exploitability-classifier"
              target="_blank"
            >
              GitHub repository
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Timeline;
