import React from "react";
import "./Header.css";
import Image from "../assets/images/image.jpg"; // Adjust the path if necessary

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="profile-picture">
          <img src={Image} alt="Profile" />
        </div>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and skills</p>
        <div className="header__actions">
          <a href="#projects" className="header__cta">
            View Projects
          </a>
          <a
            href="/Sonu Yadav.pdf"
            className="header__cta header__cta--download"
            download
          >
            Download My Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
