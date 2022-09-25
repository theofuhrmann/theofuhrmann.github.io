import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Timeline from "./Components/Timeline";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
// import Random from "./Components/Random";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarProcessing from "./Components/BarProcessing";
import profilePicture from "./Images/profile.jpeg";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <BarProcessing />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/work" element={<Work />} />
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
    <div className="text-home">
      <img src={profilePicture} alt="" className="profile-picture"></img>
      <h1>Hey! My name is Théo</h1>
      <p>
        Welcome to my personal portfolio, where I can
        <br /> tell you a little bit about myself! Have a look!
      </p>
    </div>
  </>
);

export default App;
