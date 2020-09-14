import React from "react";
import { Link } from "@reach/router";
import logo from "../img/serinlogo2.png";
import project from "../img/project.png";
const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        <span className="tooltiptext">Let's go back to homepage</span>
      </Link>
      <Link className="navbar-project" to="/project">
        <img src={project} alt="project" className="logo project" />
      </Link>
    </nav>
  );
};

export default Nav;
