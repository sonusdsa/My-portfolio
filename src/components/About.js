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
          and visually Attractive web applications. My expertise lies in modern
          front-end technologies and responsive design.
        </p>
      </Fade>
    </section>
  );
};

export default About;
