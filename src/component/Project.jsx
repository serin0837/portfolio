import React from "react";
import portfolio from "../img/portfolio.PNG";
import worldCountries from "../img/world countries.PNG";
import damso from "../img/damso.PNG";
import dice from "../img/dice.PNG"
import japanese from "../img/japanese.PNG"
import ProjectCard from "./ProjectCard"
import wordCard from "../img/word-card.PNG";
import kanji from "../img/kanji.PNG"

const Project = () => {
  const projectDatas = [
    {title : "Kanjiru",
    image : kanji,
    mainP : "A web application to help you memorize Japanese Kanji characters. We implemented third party API",
    listP : [
      "Can get information about Kanji characters by different level",
    ],
    frontendTech : "Responsive web application built with React, Router and Axios.",
    frontendLive: "https://kanji-ru.netlify.app",
    frontendCode:"https://github.com/Kimovi/Kanji_ru",
    backendTech: "",
    backendLive: "",
    backendCode: "",
    },
    //1
    {title : "Word Card",
    image : wordCard,
    mainP : "A web application to help you memorize new words.",
    listP : [
      "Create your own word cards for new words which you want to memorize.",
      "Delete your word cards that you have memorized.",
      "Create word cards in different languages."
    ],
    frontendTech : "Responsive website built with React, Router and Axios.",
    frontendLive: "https://word-card.netlify.app/",
    frontendCode:"https://github.com/serin0837/word-list-app",
    backendTech: "Server written down in Express and MongoDB.",
    backendLive: "https://word-back.herokuapp.com/api/words",
    backendCode: "https://github.com/serin0837/word-backend",
    },
    //2
    {title : "World Countries",
    image : worldCountries,
    mainP : " A web application to give you information about different countries in the world. This application combines my passion for coding and travelling.",
    listP : [
      "See the countries that I have been.",
      "Get information about different countries across the globe.",
      "Create your own imaginary countries.",
      "Delete your imaginary countries.",
      "Update information about your imaginary countries."
    ],
    frontendTech : "Responsive website built with React, Router and Axios.",
    frontendCode: "https://github.com/serin0837/country",
    frontendLive: "https://world-traveller.netlify.app/",
    backendTech: "Server made with Express and MongoDB.",
    backendCode: "https://github.com/serin0837/country-backend",
    backendLive: "https://country-back.herokuapp.com/api/countries",
    },

    //3
    {title : "Serin Jeon",
    image : portfolio,
    mainP : "The personal portfolio website gives information about myself.",
    listP : [
      "Get to know me",
      "Check my projects.",
    ],
    frontendTech : "Responsive web application built with React and Router.",
    frontendCode: "https://github.com/serin0837/portfolio",
    frontendLive: "https://serin-jeon.herokuapp.com",
    backendTech: "Server made with Express and MongoDB.",
    backendCode: null,
    backendLive: null,
    },
    //4
    {title : "Damso: Learn Korean",
    image : damso,
    mainP : "A single web page about my Korean tutoring.",
    listP : [
      "Get information about my Korean classes.",
    ],
    frontendTech : "Responsive webpage with HTML and CSS.",
    frontendCode: "https://github.com/serin0837/damso_learnkorean",
    frontendLive: "https://damsolearnkorean.netlify.app/",
    backendTech: "Connected to Firebase DB to get email information",
    backendCode: null,
    backendLive: null,
    },
    //5
    {title : "ChoHan Bakuchi",
    image : dice,
    mainP : "A single web page to play Japanese dice game. Made with pair-programming with my friend.",
    listP : [
      "Play Japanese dice game.",
    ],
    frontendTech : "Webpage with HTML, CSS and Javascript.",
    frontendCode: "https://github.com/Kimovi/Chohan_Bakuchi",
    frontendLive: "https://chohan-bakuchi.netlify.app/",
    backendTech: null,
    backendCode: null,
    backendLive: null,
    },
    //6
    {title : "Learn Japanese",
    image : japanese,
    mainP : "A single web page to memorize Japanese words.",
    listP : [
      "Add a word that you want to memorize.",
      "Delete a word that you don't want memorize.",
      "Update a word that want to edit."
    ],
    frontendTech : "Responsive webpage with HTML, CSS, Bootstrap and Javascript.",
    frontendCode: "https://github.com/serin0837/Learn-Japanese",
    frontendLive: "https://learn-japanese.netlify.app/",
    backendTech: null,
    backendCode: null,
    backendLive: null,
    },

  ]
  return (
    <div className="main">
      <section className="projects-section">
        <h1 className="projects-section-header">
          These are my projects.
        </h1>
        <div className="projects-grid">
        {projectDatas.map(projectData => <ProjectCard projectData = {projectData} /> )}
        </div>
      </section>
    </div>
  );
};

export default Project;
