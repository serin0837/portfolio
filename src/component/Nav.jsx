import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">Homepage</Link>
      <Link to="/about-me">About Me</Link>
      <Link to="/project">Project</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
