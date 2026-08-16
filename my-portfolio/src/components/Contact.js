import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal('.contact form', { 
      origin: 'bottom',
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

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>
      <form>
        <div>
          <p>
            Have a project in mind?<br /> 
            Want to work with me? <br /> 
            Or any questions?<br />
            Please feel free to reach out to me via following:
          </p>
        </div>
        <div className="social-media">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              <i className={`bx ${link.icon}`}></i>
            </a>
          ))}
        </div>
      </form>
    </section>
  );
};

export default Contact;