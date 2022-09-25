import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Théo's Portfolio | Contact </title>
      </Helmet>
      <div className="content">
        <h1 style={{ color: "rgb(73, 48, 60)" }}>Contact ✉️</h1>
        <p>
          You can find me on{" "}
          <a href="https://github.com/theofuhrmann" className="address-link">
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/theofuhrmann/"
            className="address-link"
          >
            LinkedIn
          </a>
          . Also feel free to send me an email at{" "}
          <a href="mailto:theositges@gmail.com" className="address-link">
            theositges@gmail.com
          </a>{" "}
        </p>
      </div>
    </>
  );
}

export default Contact;
