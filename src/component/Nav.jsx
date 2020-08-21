import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        Home
        <img src="../serin.png" alt="serinlogo" />
      </Link>
      <Link to="/project">Project</Link>
    </nav>
  );
};

export default Nav;
