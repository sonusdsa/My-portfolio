import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar__logo">My Portfolio</div>
      <div
        className={`navbar__burger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="navbar__burger-line"></div>
        <div className="navbar__burger-line"></div>
        <div className="navbar__burger-line"></div>
      </div>
      <ul
        ref={menuRef}
        className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
      >
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-50}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            offset={-50}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            offset={-50}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-50}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
