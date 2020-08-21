import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Nav from "./component/Nav";
import HomePage from "./component/HomePage";
import AboutMe from "./component/AboutMe";
import Project from "./component/Project";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <HomePage path="/"></HomePage>
        <AboutMe path="/about-me"></AboutMe>
        <Project path="/project"></Project>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
