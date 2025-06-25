import React from 'react';
import './Contact.css';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

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
      <div className="container py-4">
        <div className="row align-items-center">
          {/* Left Text Block */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold text-gradient mb-3">CONTACT ME</h2>
            <p className="contact-description fs-4">
              Feel free to reach out to me for any inquiries, collaboration opportunities, or if you just want to say hello.
              I am always open to discussing new projects, creative ideas, or potential collaborations. Let's connect and
              build something amazing together!
            </p>
          </div>

          {/* Right Contact Cards */}
          <div className="col-md-6">
            <div className="row g-3">
              {contacts.map((item, index) => (
                <div className="col-sm-6" key={index}>
                  <div
                    className={`contact-card card-fade delay-${index + 1}`}
                    onClick={() => handleCardClick(item.link)}
                  >
                    <i className={`${item.icon} fa-2x mb-2`}></i>
                    <h6>{item.title}</h6>
                    <p>{item.value}</p>
                    <span className="card-link">Send a message</span>
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
