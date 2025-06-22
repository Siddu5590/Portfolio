import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle } from 'react-icons/fa';

// Skills data
const skillsData = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 'Experienced' },
      { name: 'CSS', level: 'Experienced' },
      { name: 'JavaScript', level: 'Experienced' },
      { name: 'Bootstrap', level: 'Experienced' },
      { name: 'React JS', level: 'Intermediate' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Spring / Spring Boot', level: 'Experienced' },
      { name: 'Java Programming', level: 'Experienced' },
      { name: 'Servlets & JSP', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Libraries',
    skills: [
      { name: 'NPM', level: 'Experienced' },
      { name: 'Maven', level: 'Intermediate' },
      { name: 'GitHub', level: 'Experienced' },
      { name: 'Postman API', level: 'Intermediate' },
    ],
  },
];

// Style objects
const cardStyle = {
  backgroundColor: '#0d1b1e',
  borderRadius: '15px',
  padding: '25px',
  color: 'white',
  border: '2px solid #d100f1',
  height: '100%',
};

const skillIconStyle = {
  color: '#d100f1',
  marginRight: '10px',
  fontSize: '1rem',
};

const Skills = () => {
  return (
    <section className="skills-section py-5" style={{ backgroundColor: '#020b10' }}>
      <div className="container text-center mb-5">
        <p style={{ letterSpacing: '1.5px', color: 'white', marginBottom: '5px' }}>EXPLORE MY</p>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>
          <span style={{
            background: 'linear-gradient(90deg, white, #aaa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            EXPERIENCE
          </span> / <span style={{ color: '#ccc' }}>SKILLS</span>
        </h2>
      </div>

      <div className="container">
        <div className="row g-4">
          {skillsData.map((category, index) => (
            <div className="col-md-4" key={index}>
              <div style={cardStyle}>
                <h4 style={{ color: '#d100f1', marginBottom: '20px' }}>{category.title}</h4>
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="d-flex align-items-start mb-3">
                    <FaCheckCircle style={skillIconStyle} />
                    <div>
                      <div style={{ fontWeight: '500' }}>{skill.name}</div>
                      <div style={{ fontSize: '0.85rem', color: '#bbb' }}>{skill.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
