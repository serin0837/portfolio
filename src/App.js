import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Nav from "./component/Nav";
import HomePage from "./component/HomePage";
import AboutMe from "./component/AboutMe";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Nav className="navbar" />
      <Router className="main">
        <HomePage path="/"></HomePage>
        <AboutMe path="/about-me"></AboutMe>
        <Project path="/project"></Project>
        <Contact path="/contact"></Contact>
      </Router>
      <Footer className="footer" />
    </div>
  );
}

export default App;
