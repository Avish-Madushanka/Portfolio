import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Services.css';

const Services = () => {
  useEffect(() => {
    ScrollReveal().reveal('.services-box', { 
      origin: 'bottom',
      distance: '80px',
      duration: 2000,
      delay: 200,
      interval: 200
    });
  }, []);

  const services = [
    {
      icon: 'bx-code-alt',
      title: 'Web Development',
      description: '"Building modern websites that blend creativity with functionality. I am proficient in a variety of programming languages and technologies, including HTML, CSS, JavaScript, PHP, and MySQL which will turn your digital vision into reality."'
    },
    {
      icon: 'bxs-paint',
      title: 'UI/UX Design',
      description: '"Designing intuitive and visually stunning user experiences that leave a lasting impression. I will create you designs using latest design tools that are both functional and aesthetically pleasing and that engage and delight your audience"'
    },
    {
      icon: 'bxs-paint',
      title: 'Logo Design',
      description: '"Let your logo speak volumes. Using latest design tools and techniques I will design you logos that are unique, attractive and that define your brand with simplicity and impact. Elevate your brand with a memorable mark"'
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="services-box">
            <i className={`bx ${service.icon}`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="mailto:avishmadushanka21@gmail.com" className="btn" target="_blank" rel="noopener noreferrer">
              Get a Quote
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;