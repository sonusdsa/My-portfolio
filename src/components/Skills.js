import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React", icon: "fab fa-react" },
  { name: "Redux", icon: "fab fa-react" },
  { name: "Express.js", icon: "fab fa-react" },
  { name: "Tailwind CSS", icon: "fab fa-tailwind css" },
  { name: "Rest API", icon: "fab fa-rest api" },
  { name: "Bootstrap", icon: "fab fa-bootstrap" },
  { name: "C++", icon: "fab fa-cpp" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Fade cascade>
        <h2>Skills</h2>
        <div className="skills__list">
          {skills.map((skill, index) => (
            <div key={index} className="skills__item">
              <i className={`${skill.icon} skills__icon`}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
