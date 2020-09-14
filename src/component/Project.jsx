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
            <h3 className="project-title">Word Card</h3>
            <div className="project-explain">
              <p>A web application to make you easy to memorize the words. </p>
              You can :
              <ul>
                <li>Create your word card which want to memorize</li>
                <li>Delete your word card that you remember</li>
                <li>Create different language</li>
              </ul>
              <div className="project-tech">
                <h4>Technologies</h4>
                <ul>
                  <li>Front end: Responsive web and built with react</li>
                  <li>
                    Back end: server written down in Express which handle API
                    requests
                  </li>
                </ul>
              </div>
              <div className="project-button">
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
          </div>

          <div className="each-project">
            <div>
              <img
                className="project-image"
                src={worldCountries}
                alt="world-countries"
              />
            </div>
            <h3 className="project-title">World Countries</h3>
            <div className="project-explain">
              <p>
                A web application to give you information about countries in the
                world as I love to know about everything about different
                countries.
              </p>
              You can :
              <ul>
                <li>Get information about countries depends on continent.</li>
                <li>Create your own imaginary countries.</li>
              </ul>
              <div className="project-tech">
                <h4>Technologies</h4>
                <ul>
                  <li>
                    Front end: Responsive web and built with react and router
                  </li>
                  <li>Back end: Server made with strapi</li>
                </ul>
              </div>
              <div className="project-button">
                <button>
                  <a
                    href="https://github.com/serin0837/world-traveller"
                    target="_blank"
                    className="projects"
                    rel="noopener noreferrer"
                  >
                    <span className="code">&lt;</span>{" "}
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
          </div>

          <div className="each-project">
            <div>
              <img className="project-image" src={portfolio} alt="portfolio" />
            </div>
            <h3 className="project-title">Serin Jeon</h3>
            <div className="project-explain">
              <p>Personal Portfolio website give information about myself.</p>
              You can :
              <ul>
                <li>Get to know me.</li>
                <li>Check my projects.</li>
              </ul>
              <div className="project-tech">
                <h4>Technologies</h4>

                <ul>
                  <li>
                    Front end: Responsive website built with react and router
                  </li>
                </ul>
              </div>
              <div className="project-button">
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
          </div>

          <div className="each-project">
            <div>
              <img
                className="project-image"
                src={damso}
                alt="teach-korean-website"
              />
            </div>
            <h3 className="project-title">Damso: Learn Korean</h3>
            <div className="project-explain">
              <p>
                A single web page about Korean teacher give information You can
              </p>
              <div className="project-tech">
                <h4>Technologies</h4>
                <ul>
                  <li>Front end: Responsive webpage with HTML and CSS</li>
                </ul>
              </div>
              <div className="project-button">
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
          </div>
          <div className="each-project">
            <div>
              <img
                className="project-image"
                src={pokemon}
                alt="pokemon-terminal-game"
              />
            </div>
            <h3 className="project-title">Pokemon Game</h3>
            <div className="project-explain">
              <p>
                Command line Pokemon game to play in your terminal. It was part
                of my bootcamp to practive Javascript classes
              </p>
              <div className="project-tech">
                <h4>Technologies</h4>
                <ul>
                  <li> Javascript, Inquirer, Tested with Jest</li>
                </ul>
              </div>
              <div className="project-button">
                <button>
                  <a
                    href="https://github.com/serin0837/pokemon"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
