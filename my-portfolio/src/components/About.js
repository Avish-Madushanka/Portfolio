import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './About.css';
import aboutImage from '../assets/images/abouti.png';

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal('.about-img, .about-content', { 
      origin: 'left',
      distance: '80px',
      duration: 2000,
      delay: 200
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={aboutImage} alt="About Avish" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Aspiring Software Engineer</h3>
        <p>
          I am a passionate Software Engineering Undergraduate, Co-Founder of AviOniks, Developer, UI/UX Designer and a Freelancer with a knack for exploring the world of technology.
          <br /><br />
          <b>Full Name:</b> Avish Madushanka Rodrigo
          <br />
          <b>Email:</b> avishmadushanka21@gmail.com
          <br />
          <b>Nationality:</b> Sri Lankan
        </p>
      </div>
    </section>
  );
};

export default About;