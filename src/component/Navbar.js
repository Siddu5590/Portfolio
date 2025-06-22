import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { id: 'home', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'skills', label: 'Skills', icon: <FaCode /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">Siddaveer Swamy</a>

        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`navbar-collapse ${menuOpen ? 'show' : 'collapse'} justify-content-end`} id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  activeClass="active"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  className="nav-link text-uppercase d-flex align-items-center gap-2"
                  onClick={handleClose}
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
