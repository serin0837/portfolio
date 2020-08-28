import React from "react";
import project1 from "../img/word-card.PNG";
import project2 from "../img/portfolio.PNG";
import project3 from "../img/pokemon.PNG";

const Project = () => {
  return (
    <div className="main">
      <section className="projects-section">
        <div className="projects-grid">
          <div className="each-project">
            <div>
              <img className="project-image" src={project1} alt="project1" />
            </div>
            <div className>
              <h3 className="project-title">word-card-app</h3>
              <p>Front end react application</p>
              <p>
                You can add word cards that you want to memorize and you can
                remove word cards if you know that word. (still on developing)
              </p>
              <a
                href="https://github.com/serin0837/word-list-app"
                target="_blank"
                className="projects"
              >
                <button>
                  <span className="code">&lt;</span>
                  code
                  <span className="code">&#47;&gt;</span>
                </button>
              </a>
            </div>
          </div>

          <div className="each-project">
            <div>
              <img className="project-image" src={project2} alt="project2" />
            </div>
            <div>
              <h3 className="project-title">Portfolio website</h3>
              <p>My first portfolio website</p>
              <p>explain</p>
              <a href="#" target="_blank" className="projects">
                <button>
                  <span className="code">&lt;</span>
                  code
                  <span className="code">&#47;&gt;</span>
                </button>
              </a>
            </div>
          </div>

          <div className="each-project">
            <div>
              <img className="project-image" src={project3} alt="project3" />
            </div>
            <div>
              <h3 className="project-title">Pokemon Game</h3>
              <p>Terminal Pokemon game</p>
              <p>explain</p>
              <a href="#" target="_blank" className="projects">
                <button>
                  <span className="code">&lt;</span>
                  code
                  <span className="code">&#47;&gt;</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
