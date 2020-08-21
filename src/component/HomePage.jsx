import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div className="main">
      <section id="welcome-section" className="welcome-section">
        <div>
          <h1>Hi, I'm Serin, a Wep developer</h1>
        </div>
        <div className="welcome-section-nav">
          <Link className="about-me" to="/about-me">
            About Me
          </Link>
        </div>
        <div className="connect">
          <p>
            <i> Connect with me</i>
            <span id="arrow-down"> &#8628; </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
