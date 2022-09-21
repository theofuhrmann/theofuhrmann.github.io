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
        <h1 style={{ color: "rgb(90, 111, 125)" }}>Projects</h1>
        <ul>
          <li>
            <h3> Cybervulnerability Exploitability Classifier </h3>
            <p>
              For my final thesis for my Computer Science degree I trained
              various machine learning models with gathered CVE data to predict
              the potential exploitability of cybervulnerabilities.
              <br />
              <br />
              <button>
                <a
                  href="https://github.com/theofuhrmann/cybervulnerability-exploitability-classifier"
                  target="_blank"
                >
                  GitHub repository
                </a>
              </button>
            </p>
          </li>
          <li>
            <h3> Voice-Sex Recognition Classifier </h3>
            <p>
              Found patterns given various voice features to recognize the sex
              of the speaker using neural networks and other machine learning
              models.
              <br />
              <br />
              <button>
                <a
                  href="https://github.com/theofuhrmann/ML-Speech-MF-Recognition"
                  target="_blank"
                >
                  GitHub repository
                </a>
              </button>
            </p>
          </li>
          <li>
            <h3> Interactive Delaunay triangulation </h3>
            <p>
              Implemented the Delaunay triangulation with HTML, CSS and
              JavaScript using a doubly connected edge list (DCEL). This
              specific triangulation is used for modelling terrains with a nice
              set of triangles to use as polygons in the models by avoiding
              narrow triangles.
              <br />
              <br />
              <button>
                <a
                  href="https://github.com/theofuhrmann/ML-Speech-MF-Recognition"
                  target="_blank"
                >
                  GitHub repository
                </a>
              </button>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Projects;
