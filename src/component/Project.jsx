import React from "react";
import project1 from "../img/word-card.PNG";
import project2 from "../img/portfolio.PNG";
import project3 from "../img/pokemon.PNG";
import project4 from "../img/world countries.PNG";

const Project = () => {
  return (
    <div className="main">
      <section className="projects-section">
        <h2 className="projects-section-header">
          These are my projects and I am still working on.
        </h2>

        <div className="projects-grid">
          <div className="each-project">
            <div>
              <img className="project-image" src={project1} alt="project1" />
            </div>
            <div className="project-explain">
              <h3 className="project-title">Word card application</h3>
              <p>Front end react application</p>
              <p>
                You can add word cards that you want to memorize and you can
                remove word cards if you know that word. (still on developing)
              </p>

              <button>
                <a
                  href="https://github.com/serin0837/word-list-app"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  code
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>
            </div>
          </div>

          <div className="each-project">
            <div>
              <img className="project-image" src={project2} alt="project2" />
            </div>
            <div className="project-explain">
              <h3 className="project-title">Portfolio website</h3>
              <p>My first portfolio website</p>
              <p>explain</p>

              <button>
                <a
                  href="https://github.com/serin0837/portfolio"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  code
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>
            </div>
          </div>

          <div className="each-project">
            <div>
              <img className="project-image" src={project3} alt="project3" />
            </div>
            <div className="project-explain">
              <h3 className="project-title">Pokemon Game</h3>
              <p>Terminal Pokemon game</p>
              <p>explain</p>

              <button>
                <a
                  href="https://github.com/serin0837/pokemon"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  code
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>
            </div>
          </div>

          <div className="each-project">
            <div>
              <img className="project-image" src={project4} alt="project4" />
            </div>
            <div className="project-explain">
              <h3 className="project-title">World Countries</h3>
              <p>World Countries with backend</p>
              <p>explain</p>

              <button>
                <a
                  href="https://github.com/serin0837/world-traveller"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  code
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
