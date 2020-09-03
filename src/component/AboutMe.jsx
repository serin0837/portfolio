import React from "react";

const AboutMe = () => {
  return (
    <div className="main">
      <section id="about-me" className="about-me-section">
        <h2>My name is Serin.</h2>
        <a
          href="file:///C:/Users/serin/OneDrive/Desktop/cv%20developer/CV%20developer.pdf"
          download
        >
          &gt; <i>download my CV!</i>
        </a>
        <p id="background">
          <span role="img" aria-label="emoji">
            🐣
          </span>
          I am originally from Korea. I came to the UK as it has been my dream
          since I was a teenager work and live here. In Korea I studied
          Economics at University and I then worked as a HR assistant for
          Hyundai for around 2 years. I am determined to make my dream come true
          so in February 2019 I quit my job in Korea and came all the way here
          to the UK.
        </p>

        <p id="interest">
          <span role="img" aria-label="emoji">
            🐤
          </span>
          My interest in coding first started last year through a conversation I
          had with one of my customers who works in the IT industry. We talked
          about what coding was and how quickly the industry is growing.
          Following that conversation I started to do my own research into the
          field and joined meet ups such as ‘code up’ and ‘code and stuff’.From
          there my interest grew and grew.
        </p>

        <p id="career">
          <span role="img" aria-label="emoji">
            🐓
          </span>
          Coding was not something I ever imagined my self doing and a subject I
          had very little knowledge on until recently. However, after spending
          time speaking with people from the industry, attending meet ups,
          watching hours of youtube videos, studying via online classes and
          practicing at home, I have found something that I am incredibly
          passionate about. <br></br>I have recently graduated bootcamp in
          Northcoders, and since then I have been kept studying about software
          development and I am also doing 100days of code challenge in my
          twitter. Now I am looking for my next journey as developer.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
