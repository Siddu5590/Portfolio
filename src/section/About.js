import React from 'react';
import './About.css';
import aboutImage from '../assets/about.jpg';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="about"
      className="py-5 text-white about-section"
    >
      <div className="container text-center mb-5">
        <p className="about-subtitle">GET TO KNOW MORE</p>
        <h2 className="about-title">
          <span className="gradient-text">ABOUT ME</span>
        </h2>
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div
            className={`col-md-6 mb-4 mb-md-0 text-center ${
              inView ? 'slide-left' : 'hidden-left'
            }`}
          >
            <img
            src={aboutImage}
             alt="siddu"
           className="about-image img-fluid shadow-lg"
            />

          </div>

          {/* Right Content */}
          <div
            className={`col-md-6 text-md-start text-center ${
              inView ? 'slide-right' : 'hidden-right'
            }`}
          >
            <p className={`fs-5 paragraph ${inView ? 'fade-in delay-1' : ''}`}>
              Hello!, I am <strong>SIDDAVEER SWAMY</strong>
            </p>
            <p className={`fs-5 paragraph ${inView ? 'fade-in delay-2' : ''}`}>
              A self-taught programmer with a passion for learning and exploring new technologies.
            </p>
            <p className={`fs-5 paragraph ${inView ? 'fade-in delay-3' : ''}`}>
              My expertise spans from front-end development to back-end programming.
            </p>
            <p className={`fs-5 paragraph ${inView ? 'fade-in delay-4' : ''}`}>
              I am currently expanding my skillset to include <strong>Java Full Stack</strong>.
            </p>
            <p className={`fs-5 paragraph ${inView ? 'fade-in delay-5' : ''}`}>
              As a dedicated and driven individual, I constantly seek out opportunities to grow and improve as a programmer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
