import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    ScrollReveal().reveal('.Con-form', { 
      origin: 'bottom',
      distance: '80px',
      duration: 2000,
      delay: 200
    });
    
    ScrollReveal().reveal('.Con-social-item', {
      origin: 'bottom',
      distance: '50px',
      duration: 1500,
      delay: 300,
      interval: 100
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qq5sh5d',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      alert('Message sent successfully! I will get back to you soon.');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again or email me directly.');
      console.log(error.text);
    });
  };

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/avish-madushanka-640172248', icon: 'bxl-linkedin' },
    { href: 'mailto:avishmadushanka21@gmail.com', icon: 'bx-envelope' },
    { href: 'https://github.com/Avish-Madushanka', icon: 'bxl-github' },
    { href: 'https://www.behance.net/avishmadushanka', icon: 'bxl-behance' },
    { href: 'https://www.facebook.com/avish.madushanka.5?mibextid=ZbWKwL', icon: 'bxl-facebook' },
    { href: 'https://instagram.com/avish_madushanka?igshid=OGQ5ZDc2ODk2ZA==', icon: 'bxl-instagram-alt' }
  ];

  return (
    <section className="Con-contact" id="contact">
      <div className="Con-container">
        <h2 className="Con-heading">
          Contact <span>Me!</span>
        </h2>
        
        <div className="Con-content">
          <div className="Con-text">
            <p className="Con-subtitle">Let's Connect</p>
            <p className="Con-description">
              Have a project in mind?<br />
              Want to work with me?<br />
              Or any questions?<br />
              <span>Feel free to reach out!</span>
            </p>
            <p className="Con-availability">
              <i className='bx bx-time'></i> Available for freelance work
            </p>
          </div>

          <div className="Con-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="Con-form-group">
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              <div className="Con-form-group">
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
              <div className="Con-form-group">
                <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="Con-submit-btn">
                <i className='bx bx-send'></i> Send Message
              </button>
            </form>

            <div className="Con-divider">
              <span>or connect via</span>
            </div>
            
            <div className="Con-social-grid">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="Con-social-item"
                  aria-label={link.icon.replace('bxl-', '').replace('bx-', '')}
                >
                  <i className={`bx ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;