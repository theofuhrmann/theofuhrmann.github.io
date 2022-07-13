import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Work from "./Components/Work";
import Random from "./Components/Random";
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
          <Route path="/work" element={<Work />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </Router>
      <div />
    </div>
  );
}

const Home = () => (
  <div className="content">
    <Helmet>
      <title>Théo's Portfolio | Home </title>
    </Helmet>
    <div className="text-home">
      <img src={profilePicture} alt="" className="profile-picture"></img>
      <h1>Hey!</h1>
      <p>My name is Théo, welcome to my personal portfolio! Have a look!</p>
    </div>
  </div>
);

export default App;
