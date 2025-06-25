import React from 'react';
import './Project.css';
import { useInView } from 'react-intersection-observer';

import image from '../assets/image1.jpg';
import image1 from '../assets/image2.jpg';
import image2 from '../assets/image3.jpg';

function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const projectList = [
    {
      image: image,
      title: 'Digital E-Commerce Application',
      description:
        'This web-based DIGITAL E-COMMERCE application includes modules like Customer, Admin, Order, Cart, and Delivery. It supports Cash on Delivery and is fully responsive.',
      tech: ['Spring Boot', 'Java', 'HTML, CSS, Javascript', 'MySQL'],
      code: 'https://github.com/Siddu5590/Digital-E-commerce.git',
      demo: '#',
    },
    {
      image: image2,
      title: 'Travel and Tourism (J2EE)',
      description:
        'A system to automate bookings, user and destination management with admin and guide support. Enhances experience for all travel stakeholders.',
      tech: ['Java', 'Servlets and JSP', 'HTML, CSS', 'MySQL'],
      code: 'https://github.com/Siddu5590/Travel-Tales.git',
      demo: '#',
    },
    {
      image: image1,
      title: 'Bank Application',
      description:
        'Secure web-based system using J2EE. Allows deposits, withdrawals, balance checks, transaction views for customers and admins.',
      tech: ['Java', 'J2EE', 'HTML, CSS', 'MySQL'],
      code: 'https://github.com/Siddu5590/Bank-Application.git',
      demo: '#',
    },
  ];

  return (
    <section
      id="projects"
      className={`projects-section text-white ${inView ? 'fade-in-up' : 'hidden'}`}
      ref={ref}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-gradient">PROJECTS</h2>
        <div className="row g-4">
          {projectList.map((project, index) => (
            <div className="col-md-4 col-sm-6 col-12" key={index}>
              <div className={`card project-card h-100 card-fade delay-${index + 1}`}>
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <h6 className="tech-title">Technologies</h6>
                  <div className="mb-3 tech-badges">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto d-flex flex-wrap gap-2">
                    {/* <a
                      href={project.demo}
                      className="btn btn-primary btn-sm"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a> */}
                    <a
                      href={project.code}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
