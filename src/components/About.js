import React from "react";
import { Fade } from "react-awesome-reveal";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <Fade cascade>
        <h2>About Me</h2>

        <p>
          I'm a dedicated developer with a passion for creating user-friendly
          and visually Attractive web applications.I am looking forward to work
          in an organization where i can improve my skills and make some good
          connections. And that will allow me to grow professionally as well as
          personally. Technology : :) C, C++, JavaScript, React, Redux, Rest
          API, Express.js Also interested in : :) Data Science, Data Analyst,
          DevOps, Web Security, Blogging, wordpress
        </p>
      </Fade>
    </section>
  );
};

export default About;
