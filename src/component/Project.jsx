import React from "react";
import wordCard from "../img/word-card.PNG";
import portfolio from "../img/portfolio.PNG";
import pokemon from "../img/pokemon.PNG";
import worldCountries from "../img/world countries.PNG";
import damso from "../img/damso.PNG";

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
              <img
                className="project-image"
                src={wordCard}
                alt="wordcard-project"
              />
            </div>
            <div className="project-explain">
              <h3 className="project-title">Word card application</h3>
              <p>Front end react application</p>
              <p>
                You can add word cards that you want to memorize and you can
                remove word cards if you know that word. (still on developing)
              </p>
              <div>
                <h4>Tech stack</h4>
                <p>
                  <i className="fa fa-html5"></i>HTML5
                  <i className="fa fa-css3" aria-hidden="true"></i>CSS
                  <i className="fab fa-js"></i>
                </p>
              </div>
              <button>
                <a
                  href="https://github.com/serin0837/word-list-app"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  <i className="fa fa-github" aria-hidden="true"></i> code
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>
              {/* live not work yet */}
              <button>
                <a
                  href="https://github.com/serin0837/word-list-app"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  <i className="fa fa-laptop" aria-hidden="true"></i> live
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>
            </div>
          </div>

          <div className="each-project">
            <div>
              <img className="project-image" src={portfolio} alt="portfolio" />
            </div>
            <div className="project-explain">
              <h3 className="project-title">Portfolio website</h3>
              <p>I created </p>
              <p>explain</p>

              <button>
                <a
                  href="https://github.com/serin0837/portfolio"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  <i className="fa fa-github" aria-hidden="true"></i> code
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>

              <button>
                <a
                  href="https://serin-jeon.heroku.com"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  <i className="fa fa-laptop" aria-hidden="true"></i> live
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>
            </div>
          </div>

          <div className="each-project">
            <div>
              <img
                className="project-image"
                src={damso}
                alt="teach-korean-website"
              />
            </div>
            <div className="project-explain">
              <h3 className="project-title">Teach Korean website</h3>
              <p>Terminal Pokemon game</p>
              <p>explain</p>

              <button>
                <a
                  href="https://github.com/serin0837/damso_learnkorean"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  <i className="fa fa-github" aria-hidden="true"></i> code
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>

              <button>
                <a
                  href="#"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  <i className="fa fa-laptop" aria-hidden="true"></i> live
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>
            </div>
          </div>

          <div className="each-project">
            <div>
              <img
                className="project-image"
                src={worldCountries}
                alt="world-countries"
              />
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

              <button>
                <a
                  href="#"
                  target="_blank"
                  className="projects"
                  rel="noopener noreferrer"
                >
                  <span className="code">&lt;</span>
                  <i className="fa fa-laptop" aria-hidden="true"></i> live
                  <span className="code">&#47;&gt;</span>
                </a>
              </button>
            </div>
          </div>

          <div className="each-project">
            <div>
              <img
                className="project-image"
                src={pokemon}
                alt="pokemon-terminal-game"
              />
            </div>
            <div className="project-explain">
              <h3 className="project-title">Pokemon Game</h3>
              <p>Command line Pokemon game</p>
              <p>Pokemon game that you can play in your command line.</p>

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
        </div>
      </section>
    </div>
  );
};

export default Project;
