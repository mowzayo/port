import React, { useRef, useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';



function Navbar() {
  const navRef = useRef();

  /* const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }; */
 
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  
   useEffect(() => {
    setIsOpen(false); 
  }, [location]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
    navRef.current.classList.toggle('responsive_nav'); // Toggle the CSS class
  };


  return (
    <header>
      <nav ref={navRef}>
        <ul>
          <li>
            <Link className="nav-link" to="/home" onClick={toggleNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact" onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
          <li className="dropdown">
            <span className="nav-link" onClick={toggleNavbar}>Projects</span>
            <ul className="dropdown-menu">
              <li>
              <Link className="dropdown-item" to="/Web-developer" onClick={toggleNavbar}>
                  Web Developer
                </Link>
              </li>
              <li>
              <Link className="dropdown-item" to="/data-analyst" onClick={toggleNavbar}>
                  Data Analyst
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
}


export default Navbar;