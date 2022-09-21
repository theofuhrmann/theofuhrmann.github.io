import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

function Projects() {
  return (
    <>
      <Helmet>
        <title>Théo's Portfolio | Projects </title>
      </Helmet>
      <div className="content">
        <h1 style={{ color: "rgb(90, 109, 77)" }}>Projects</h1>
        <ul className="content-ul">
          <li className="content-li">
            <h3> Cybervulnerability Exploitability Classifier </h3>
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
          <li className="content-li">
            <h3> Voice-Sex Recognition Classifier </h3>
            <p>
              Found patterns given various voice features to recognize the sex
              of the speaker using neural networks and other machine learning
              models.
              <br />
              <br />
            </p>
            <a
              className="link"
              href="https://github.com/theofuhrmann/ML-Speech-MF-Recognition"
              target="_blank"
            >
              GitHub repository
            </a>
          </li>
          <li className="content-li">
            <h3> Interactive Delaunay triangulation </h3>
            <p>
              Implemented the Delaunay triangulation with HTML, CSS and
              JavaScript using a doubly connected edge list (DCEL). This
              specific triangulation is used for modelling terrains with a nice
              set of triangles to use as polygons in the models by avoiding
              narrow triangles.
              <br />
              <br />
            </p>
            <a
              className="link"
              href="https://github.com/theofuhrmann/delaunay-triangulation"
              target="_blank"
            >
              GitHub repository
            </a>
          </li>
          <li className="content-li">
            <h3> AI Player for Moria </h3>
            <p>
              Artificial Intelligence for a player in the Moria competition, a
              contest involving 240+ computer science students at the Barcelona
              UPC enrolled in the Data Structure & Algorithms class in 2019.
              <br />
              <br />
              The algorithm built with C++ controls 20 dwarfs and 5 wizards that
              have to loot the treasures and attack the 3 other players that are
              playing in the same board and other engine-powered enemies to
              maximise the score and win.
              <br />
              <br />
              It is a very fun and interesting game where I had to take into
              account many variables to engineer a strategy to survive for 235
              rounds and this AI made it to the finals!
              <br />
              <br />
            </p>
            <a
              className="link"
              href="https://github.com/theofuhrmann/ML-Speech-MF-Recognition"
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

export default Projects;
