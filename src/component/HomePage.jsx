import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div className="main">
      <section id="welcome-section" className="welcome-section">
        <div>
          <h1>Hi, I'm Serin, a full-stack developer</h1>
        </div>
        <div className="welcome-section-nav">
          <Link className="about-me" to="/about-me">
            &gt; About Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
