import React from "react";

const Project = () => {
  return (
    <div className="main">
      <section className="projects-section">
        <h2 className="projects-section-header">
          These are some of my project
        </h2>

        <div className="projects-grid">
          <a href="#" target="_blank" className="project project-title">
            <img className="project-image" src="#" alt="project" />
            <p className="project-title">
              <span className="code">&lt;</span>
              word-remember-app
              <span className="code">&#47;&gt;</span>
            </p>
          </a>

          <a href="#" target="_blank" className="project project-title">
            <img className="project-image" src="#" alt="project" />
            <p className="project-title">
              <span className="code">&lt;</span>?
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Project;
