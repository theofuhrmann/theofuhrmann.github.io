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
        <h1 style={{ color: "rgb(90, 111, 125)" }}>Timeline</h1>
        <p>
          I am a recent Computer Science graduate (July 2022) from the
          Polytechnic University of Catalonia (UPC) specializing in Artificial
          Intelligence and algorithms. My passion is Computer Science. My main
          interests have been Machine Learning and Data Science since I learnt
          Timeline them in college. Other interests involve Natural Language
          Processing and Computer Vision.
        </p>
      </div>
    </>
  );
}

export default Timeline;
