import React from 'react';
import { Helmet } from "react-helmet";
import '../App.css';

function Work() {
  return (
    <div>
      <Helmet>
        <title>Théo's Portfolio | Work </title>
      </Helmet>
      <div className="content">
        <h1 style={{color: "rgb(89, 109, 75)"}}>Work</h1>
      </div>
    </div>
  );
}

export default Work;
