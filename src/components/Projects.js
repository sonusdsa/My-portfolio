import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Todolist in React",
    description:
      "Todolist_in_React is a web application built using the React library specifically designed to manage to-do tasks.It allows users to: 'Add new items to their to-do list','See all List of items'and many things like  Create, Read, Update and Delete etc.",
    imgSrc: "/Todolist..png",
  },
  {
    id: 2,
    title: "News Web.App React Alanai",
    description:
      "News Web App React Alanai is a web application designed to provide a user-friendly and interactive platform for staying informed about current events. It leverages three key technologies to achieve this:React,Alan AI,News Data Source..Here are some potential functionalities you might encounter:Browsing news,Voice-controlled news consumption.",
    imgSrc: "/News app.png",
  },
  {
    id: 3,
    title: "Face Recognition Based Attendance Management System",
    description:
      " This project aims to develop a Face Recognition-based Attendance Management System that automates the manual process of attendance tracking. Utilizing Python's Tkinter library and a database, this system modernizes attendance tracking and enhances time management efficiency.",
    imgSrc: "/FacialRecoginationAttendance.jpg",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "This project aims to develop a dynamic and interactive personal portfolio website using React, a popular JavaScript library and EmailJs Service (EmailJS provides a convenient way to send emails from your React application without managing server-side email configurations). The website will serve as your online presence, showcasing your skills, experience, and accomplishments to potential employers, clients, or collaborators.",
    imgSrc: "/portfolio.jpg",
  },
  {
    id: 5,
    title: "Online Quiz Maker",
    description:
      "This project focuses on building an interactive Online Quiz Maker application using React, a popular JavaScript library.  The application completes to two main user functionalities: creating quizzes and taking quizzes.Creating Quizzes:Intuitive Interface: React's component-based approach allows for a user-friendly interface for constructing quizzes.Taking Quizzes: Dynamic User Experience,Real-time Feedback. Technical Considerations:React Library,State Management,Data Storage. Benefits of using React:Reusable Components,Dynamic User Experience,Scalability.",
    imgSrc: "/online quiz maker.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Fade cascade>
        <h2>Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="projects__item">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="projects__img"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Projects;
