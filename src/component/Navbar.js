import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { id: 'home', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'skills', label: 'Skills', icon: <FaCode /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">Siddaveer Swamy</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
