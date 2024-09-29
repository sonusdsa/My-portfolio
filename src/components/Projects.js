import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "NetFilm-GPT",
    description:
      "•React.js •Tailwind CSS •Firebase Authentication •TMDB API Integration •Redux Toolkit • Custom Hooks (e.g., usePopularMovies , useNowPlayingMovies ) •React Router •Form Validation • State Management (Redux) • YouTube Video Embedding •API Fetching and Data Handling •Netlify Deployment",
    imgSrc: "/netfilm-gpt1.jpg",
  },
  {
    id: 2,
    title: "PetPuja",
    description:
      "React.js • Tailwind CSS • Swiggy API Integration • Redux for State Management • Custom Hooks (e.g., useRestaurantSearch, useCategoryFilter) • React Router for Dynamic Navigation • Parcel for Bundling and HMR • Context API for Prop Drilling • Shimmer Effects for Smooth UI Transitions • API Fetching and Data Handling • Jest for Unit and Integration Testing • Desktop/Laptop Optimized • Netlify Deployment",
    imgSrc: "/petpuja1.jpg",
  },
  {
    id: 3,
    title: "Achha-YouTube",
    description:
      "React.js • Tailwind CSS • YouTube API Integration • Redux Toolkit for State Management • Debouncing for Search Functionality • Query Caching • Live Chat with API Polling • N-Level Nested Comments • React Router for Dynamic Navigation • Separate Pages for Playlists and Videos • Performance Optimization • Netlify Deployment",
    imgSrc: "/youtube.jpg",
  },
  {
    id: 4,
    title: "Todolist in React",
    description:
      "Todolist_in_React is a web application built using the React library specifically designed to manage to-do tasks.It allows users to: 'Add new items to their to-do list','See all List of items'and many things like  Create, Read, Update and Delete etc.",
    imgSrc: "/Todolist..png",
  },

  {
    id: 5,
    title: "Face Recognition Based Attendance Management System",
    description:
      " This project aims to develop a Face Recognition-based Attendance Management System that automates the manual process of attendance tracking. Utilizing Python's Tkinter library and a database, this system modernizes attendance tracking and enhances time management efficiency.",
    imgSrc: "/FacialRecoginationAttendance.jpg",
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description:
      "•Dynamic Personal Portfolio Website •React.js •EmailJS Integration •Client-Side Email Services •Interactive Web Design •Online Professional Presence •Showcase Skills and Experience •JavaScript Library Expertise.",
    imgSrc: "/portfolio1.jpg",
  },
  {
    id: 7,
    title: "Online Quiz Maker",
    description:
      "•Interactive Online Quiz Maker •React.js •Quiz Creation Interface •Dynamic Quiz Experience •Real-Time Feedback •State Management •Data Storage Solutions •Component-Based Design •Reusable Components • Scalable Architecture.",
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
