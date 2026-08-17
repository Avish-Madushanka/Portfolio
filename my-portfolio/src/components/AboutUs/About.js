import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './About.css';
import aboutImage from '../../assets/images/about.jpeg';
import cvPDF from '../../assets/images/AvishCV.pdf';

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal('.Ab-img-container, .Ab-content', { 
      origin: 'left',
      distance: '80px',
      duration: 2000,
      delay: 200
    });
  }, []);

   const socialLinks = [
    { href: 'https://www.linkedin.com/in/avish-madushanka-640172248', icon: 'bxl-linkedin' },
    { href: 'mailto:avishmadushanka21@gmail.com', icon: 'bx-envelope' },
    { href: 'https://github.com/Avish-Madushanka', icon: 'bxl-github' },
    { href: 'https://www.behance.net/avishmadushanka', icon: 'bxl-behance' },
    { href: 'https://www.facebook.com/avish.madushanka.5?mibextid=ZbWKwL', icon: 'bxl-facebook' },
    { href: 'https://instagram.com/avish_madushanka?igshid=OGQ5ZDc2ODk2ZA==', icon: 'bxl-instagram-alt' }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'Avish_Madushanka_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="Ab-section" id="about">
      <div className="Ab-img-container">
        <div className="Ab-img-box">
          <img src={aboutImage} alt="About Avish" />
          <div className="Ab-social-card">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                <i className={`bx ${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="Ab-content">
        <h2 className="Ab-heading">I am a Passionate <span>User Experience Designer</span></h2>
        <p className="Ab-text">
          I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
        </p>
        <p className="Ab-text">
          I design and develop services for customers specializing creating stylish, modern websites, web services.
        </p>
        
        <div className="Ab-btn-wrapper">
          <a href="/#portfolio" className="Ab-btn-main">My Projects</a>
          <button onClick={handleDownloadCV} className="Ab-btn-sub">
            <i className='bx bx-download'></i> Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;