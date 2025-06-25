import React from 'react';
import './Home.css';
import profileImage from '../assets/profile.jpg';
import { useInView } from 'react-intersection-observer';

function Home() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="home"
      ref={ref}
      className={`home-section ${inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
    >
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center justify-content-between">
          {/* Left Text Block */}
          <div className="col-lg-6 mt-4 text-white">
            <h5>
              Hello there, I'm <span className="text-pink fw-bold">SHIVUROOPESH</span>
            </h5>
            <h1 className="display-4 fw-bold gradient-text">FULL STACK</h1>
            <h1 className="display-4 fw-bold gradient-text">WEB DEVELOPER</h1>

            <div className="description-box mt-4 p-3 p-md-4">
              <p className="mb-0">
                Crafting seamless and engaging web experiences through modern technologies. Whether you need a dynamic web application, an intuitive user interface, or robust back-end solutions, I’m here to transform your ideas into reality. Explore my projects and see how I can help bring your vision to life.
              </p>
            </div>

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

          {/* Right Profile Image */}
          <div className="col-lg-5 text-center mt-4 mt-lg-0">
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
