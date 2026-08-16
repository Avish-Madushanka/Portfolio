import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import './Home.css';
import homeImage from '../assets/images/grouppp.png';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Typed.js initialization
    const options = {
      strings: ['Developer', 'UI/UX Designer', 'Freelancer'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true
    };
    
    typedRef.current = new Typed('.multiple-text', options);

    // ScrollReveal initialization
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .port-box, .filter-buttons, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/avish-madushanka-640172248', icon: 'bxl-linkedin' },
    { href: 'mailto:avishmadushanka21@gmail.com', icon: 'bx-envelope' },
    { href: 'https://github.com/Avish-Madushanka', icon: 'bxl-github' },
    { href: 'https://www.behance.net/avishmadushanka', icon: 'bxl-behance' },
    { href: 'https://www.facebook.com/avish.madushanka.5?mibextid=ZbWKwL', icon: 'bxl-facebook' },
    { href: 'https://instagram.com/avish_madushanka?igshid=OGQ5ZDc2ODk2ZA==', icon: 'bxl-instagram-alt' }
  ];

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Avish Madushanka</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>Hey there! I thrive on curiosity and love to dive into new things, always eager to learn about the latest trends and innovative ideas in the ever-evolving tech landscape.</p>
        <div className="social-media">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              <i className={`bx ${link.icon}`}></i>
            </a>
          ))}
        </div>
        <a href="https://drive.google.com/file/d/1AfrChgjP4NggPqcmIiMHKcI5KReuA9lF/view?usp=drivesdk" className="btn" target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src={homeImage} alt="Avish Madushanka" />
      </div>
    </section>
  );
};

export default Home;