import React from "react";
import wordCard from "../img/word-card.PNG";
import portfolio from "../img/portfolio.PNG";
import worldCountries from "../img/world countries.PNG";
import damso from "../img/damso.PNG";

const Project = () => {
  return (
    <div className="main">
      <section className="projects-section">
        <h1 className="projects-section-header">
          These are my projects.
        </h1>
        

        <div className="projects-grid">
          <div className="each-project">
            <div>
              <img
                className="project-image"
                src={wordCard}
                alt="wordcard-project"
              />
            </div>
            <h2 className="project-title">Word Card</h2>
            <div className="project-explain">
              <p>A web application to help you memorize new words.</p>
              {/* <p className="explain">Live button is not working at the moment.</p> */}
              You can :
              <ul>
                <li>
                  Create your own word cards for new words which you want to
                  memorize.
                </li>
                <li>Delete your word cards that you have memorized.</li>
                <li>Create word cards in different languages.</li>
              </ul>
              <div className="project-tech">
                <h3>Technologies</h3>
                <ul>
                  <li>Front end: Responsive website built with React, Router and Axios.</li>
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
                    href="https://word-card.netlify.app/"
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
                  <li>
                    Back end: Server written down in Express and MongoDB.
                  </li>
                </ul>
              </div>
              <div className="project-button">
                <button>
                  <a
                    href="https://github.com/serin0837/word-backend"
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
                    href="https://word-back.herokuapp.com/api/words"
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
            <h2 className="project-title">World Countries</h2>
            <div className="project-explain">
              <p>
                A web application to give you information about different
                countries in the world. This application combines my passion for
                coding and travelling.
              </p>
              You can :
              <ul>
                <li>See the countries that I have been.</li>
                <li>
                  Get information about different countries across the globe.
                </li>
                <li>Create your own imaginary countries.</li>
              </ul>
              <div className="project-tech">
                <h3>Technologies</h3>
                <ul>
                  <li>
                    Front end: Responsive website built with React, Router and
                    Axios.
                  </li>
                  <div className="project-button">
                <button>
                  <a
                    href="https://github.com/serin0837/country"
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
                    href="https://world-traveller.netlify.app/"
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
                  <li>Back end: Server made with Express and MongoDB.</li>
                </ul>
              </div>
              <div className="project-button">
                <button>
                  <a
                    href="https://github.com/serin0837/country-backend"
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
                    href="https://country-back.herokuapp.com/api/countries"
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
            <h2 className="project-title">Serin Jeon</h2>
            <div className="project-explain">
              <p>
                The personal portfolio website gives information about myself.
              </p>
              You can :
              <ul>
                <li>Get to know me.</li>
                <li>Check my projects.</li>
              </ul>
              <div className="project-tech">
                <h3>Technologies</h3>
                <ul>
                  <li>
                    Front end: Responsive website built with React and Router.
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
                    href="https://serin-jeon.herokuapp.com"
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
            <h2 className="project-title">Damso: Learn Korean</h2>
            <div className="project-explain">
              <p>A single web page about my Korean tutoring.</p>
              You can :
              <ul>
                <li>Get information about my classes.</li>
              </ul>
              <div className="project-tech">
                <h3>Technologies</h3>
                <ul>
                  <li>Front end: Responsive webpage with HTML and CSS.</li>
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
                    href="https://damsolearnkorean.netlify.app/"
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
