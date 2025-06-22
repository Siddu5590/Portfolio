import React from 'react';
import './Home.css';
import profileImage from '../assets/profile.jpg';
import { useInView } from 'react-intersection-observer';

function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="home"
      ref={ref}
      className={`home-section ${
        inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'
      }`}
    >
      <div className="container-fluid px-3 px-md-5 overflow-hidden">

        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-white mt-2">
            <h5>
              Hello there, I'm{' '}
              <span className="text-pink fw-bold">Siddaveer Swamy</span>
            </h5>
            <h1 className="display-4 fw-bold gradient-text">FULL STACK</h1>
            <h1 className="display-4 fw-bold gradient-text">WEB DEVELOPER</h1>
            <p className="mt-4 text-justify">
              Crafting seamless and engaging web experiences through modern
              technologies. Whether you need a dynamic web application, an
              intuitive user interface, or robust back-end solutions, I'm here
              to transform your ideas into reality. Explore my projects and see
              how I can help bring your vision to life.
            </p>
            <div className="mt-4 d-flex gap-3 flex-wrap">
              <a
                href="/resume.pdf"
                download="Siddaveer_Swamy_Resume.pdf"
                className="btn btn-outline-light px-4 py-2 fw-bold"
              >
                Download Resume
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light px-4 py-2 fw-bold"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-md-6 text-center">
            <img
              src={profileImage}
              alt="Profile"
              className="img-fluid rounded-circle home-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
