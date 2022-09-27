import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Timeline from "./Components/Timeline";
import Contact from "./Components/Contact";
// import Random from "./Components/Random";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarProcessing from "./Components/BarProcessing";
import profilePicture from "./Images/profile.jpeg";
import Upc from "./Images/upc.png";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <BarProcessing />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timeline" element={<Timeline />} />
          {/* <Route path="/random" element={<Random />} /> */}
        </Routes>
      </Router>
      <div />
    </div>
  );
}

const Home = () => (
  <>
    <Helmet>
      <title>Théo's Portfolio | Home </title>
    </Helmet>
    <div className="content">
      <div className="picture-header profile-header">
        <img src={profilePicture} alt="" className="profile-picture"></img>
        <div className="picture-text profile-text">
          <h1>Hey! My name is Théo</h1>
          <p>
            Welcome to my personal portfolio, where I can
            <br /> tell you a little bit about myself! Have a look!
          </p>
        </div>
      </div>
      <img
        src={Upc}
        alt=""
        className="small-picture"
        style={{ margin: "16px 0px 8px 10px", float: "right" }}
      />
      <p>
        I am a recent Computer Science graduate (July 2022) from the Polytechnic
        University of Catalonia (UPC) specializing in Artificial Intelligence
        and algorithms. My passion is Computer Science. My main interests have
        been Machine Learning and Data Science since I learnt about them in
        college. Other interests involve Natural Language Processing and
        Computer Vision.
      </p>

      <p>
        If you would like to have a look at my CV you can click in the button to
        download it below:
      </p>
      <Link
        className="button-link"
        to={require("./Documents/CV.pdf")}
        download="CV"
        target="_blank"
      >
        CV
      </Link>
    </div>
  </>
);

export default App;
