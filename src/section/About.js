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
      className={`about-section ${inView ? 'animate' : ''}`}
    >
      <div className="container text-center mb-5">
        <p className="about-subtitle">GET TO KNOW MORE</p>
        <h2 className="about-title">
          <span className="gradient-text">ABOUT ME</span>
        </h2>
      </div>

      <div className="container">
        <div className="row align-items-center">
         
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={aboutImage}
              alt="siddu"
              className={`about-image ${inView ? 'slide-left' : 'hidden-left'}`}
            />
          </div>

        
          <div className={`col-md-7 ${inView ? 'slide-right' : 'hidden-right'}`}>
            <p className="paragraph delay-1">
              <strong>Hello!, I am SIDDAVEER SWAMY</strong>
            </p>
            <p className="paragraph delay-2">
              A self-taught programmer with a passion for learning and exploring new technologies.
            </p>
            <p className="paragraph delay-3">
              My expertise spans from front-end development to back-end programming.
            </p>
            <p className="paragraph delay-4">
              I am currently expanding my skillset to include <strong>Java Full Stack</strong>.
            </p>
            <p className="paragraph delay-5">
              As a dedicated and driven individual, I constantly seek out opportunities to grow and improve as a programmer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
