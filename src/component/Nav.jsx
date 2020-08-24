import React from "react";
import { Link } from "@reach/router";
import logo from "./serinlogo2.png";
import project from "./project.png";
const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <Link className="navbar-project" to="/project">
        <img src={project} className="logo project" />
      </Link>
    </nav>
  );
};

export default Nav;
