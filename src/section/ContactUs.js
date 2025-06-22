import React from 'react';
import './Contact.css';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contacts = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'sidduswamy925@gmail.com',
      link: 'mailto:sidduswamy925@gmail.com',
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      value: '+91 9591115590',
      link: 'https://wa.me/919591115590',
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'Siddaveer Swamy',
      link: 'https://www.linkedin.com/in/siddaveer-swamy-574aa1254/',
    },
    {
      icon: 'fab fa-telegram',
      title: 'Telegram',
      value: '@sidduswamy9591',
      link: 'https://t.me/sidduswamy9591',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact-section ${inView ? 'fade-in-up' : 'hidden'}`}
    >
      <div className="container py-5">
        <div className="row">
          {/* Left Text Block */}
          <div className="col-md-6 contact-text">
            <h2 className="fw-bold text-gradient mb-4">CONTACT ME</h2>
            <p>
              Feel free to reach out to me for any inquiries, collaboration opportunities, or if you just want to say hello.
              I am always open to discussing new projects, creative ideas, or potential collaborations. Let's connect and
              build something amazing together!
            </p>
          </div>

          {/* Right Contact Cards */}
          <div className="col-md-6">
            <div className="row g-4">
              {contacts.map((item, index) => (
                <div className="col-sm-6" key={index}>
                  <div className={`contact-card card-fade delay-${index + 1}`}>
                    <i className={`${item.icon} fa-2x mb-2`}></i>
                    <h6>{item.title}</h6>
                    <p>{item.value}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Send a message
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
