import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import './Home.css';
import homeImage from '../../assets/images/avish1.png';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Developer', 'UI/UX Designer', 'Freelancer'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true
    };
    
    typedRef.current = new Typed('.multiple-text', options);

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

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me,</h3>
        <h1>Avish Madhushanka</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>I believe technology is the art of solving problems creatively. With a relentless curiosity and a passion for learning, I dive deep into new technologies, always seeking to understand, innovate, and build solutions that make a difference.</p>
      </div>
      <div className="home-img">
        <img src={homeImage} alt="Avish Madushanka" />
      </div>
    </section>
  );
};

export default Home;