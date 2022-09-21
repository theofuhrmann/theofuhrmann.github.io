import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Helmet>
        <title>Théo's Portfolio | About </title>
      </Helmet>
      <div className="content">
        <h1 style={{ color: "rgb(90, 111, 125)" }}>About</h1>
        <p>
          I am a recent Computer Science graduate (July 2022) from the
          Polytechnic University of Catalonia (UPC) specializing in Artificial
          Intelligence and algorithms. My passion is Computer Science. My main
          interests have been Machine Learning and Data Science since I learnt
          about them in college. Other interests involve Natural Language
          Processing and Computer Vision.
        </p>
        <p>
          If you would like to have a look at my CV you can click in the button
          below:
        </p>
        <Link
          className="link"
          to={require("../Documents/CV.pdf")}
          download="CV"
          target="_blank"
        >
          CV
        </Link>
      </div>
    </>
  );
}

export default About;
