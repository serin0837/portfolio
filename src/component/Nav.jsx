import React from "react";
import { Link } from "@reach/router";
import logo from "../img/serinlogo2.png";
const Nav = () => {
  return (
    <nav className="navbar">
      <ul>
      <li  className="navbar-item" >
          <img src={logo} alt="serin portfolio logo" className="logo" />
      </li>
      <li className="navbar-item" >
        <Link to="/">
        Home
        </Link>
      </li>
      <li  className="navbar-item">
      <Link to="/about-me">
        About me
      </Link>
      </li>
      <li className="navbar-item">
      <Link className="navbar-project" to="/project">
        Projects
      </Link>
      </li>
      </ul>
    </nav>
  );
};

export default Nav;
