import React from "react";

const AboutMe = () => {
  return (
    <div className="main">
      <section id="about-me" className="about-me-section">
        <h1>My name is Serin.</h1>
        <a
          href="https://docs.google.com/document/d/12TGpPXQkGOU1cfBtmC4XNFPE106jL74V0LWUL5waWxo/edit?usp=sharing"
          download
        >
          &gt; <i>download my CV!</i>
        </a>
        <p id="background">
          <span role="img" aria-label="emoji">
            🐣
          </span>
          I am originally from Korea. I came to Manchester as it has been my
          dream since I was a teenager to work and live in the UK. In Korea, I
          studied Economics at University and I then worked as an HR assistant
          for Hyundai for around 2 years. I am determined to make my dream come
          true so in February 2019 I quit my job in Korea and came all the way
          here to the UK.
        </p>

        <p id="interest">
          <span role="img" aria-label="emoji">
            🐤
          </span>
          My interest in coding first started at the end of 2019 through a conversation I
          had with a customer at my bar job who works in the IT industry. We
          talked about what coding was and how quickly the industry is growing.
          Following that conversation, I started to do my research into the
          field and joined meetups such as ‘code up’ and ‘code and stuff’. From
          there my interest grew and grew.
        </p>

        <p id="career">
          <span role="img" aria-label="emoji">
            🐓
          </span>
          Coding was not something I ever imagined myself doing and a subject I
          had very little knowledge on. However, after spending time speaking
          with people from the industry, attending meetups, watching hours of
          youtube videos, studying via online classes, and practicing at home, I
          have found something that I am incredibly passionate about. Recently I
          joined a full-time boot camp, Northcoders. Over 2 months in boot camp,
          I gained knowledge of fundamental javascript, test-driven development,
          object-oriented programming, RESTful API and CRUD operations. In
          Northcoders, our focus of study was front-end development so since
          graduating my focus has been on learning backend and studying
          responsive web design with Freecodecamp, where I got my certification.
          I am also doing the 100 days of code challenge on twitter. (Check to
          see my journey in Twitter!) Now I am looking for my next journey as a
          developer.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
