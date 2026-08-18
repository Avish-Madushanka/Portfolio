import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import emailjs from '@emailjs/browser';
import './Services.css';

const Services = () => {
  const form = useRef();

  useEffect(() => {
    ScrollReveal().reveal('.Ser-services-box', {
      origin: 'bottom',
      distance: '100px',
      duration: 2000,
      delay: 200,
      interval: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: false
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
      document.getElementById('Ser-quote-modal').style.display = 'none';
    }, (error) => {
      alert('Failed to send message. Please try again or email me directly.');
      console.log(error.text);
    });
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Crafting high-performance, responsive websites that combine cutting-edge technology with stunning design. Expert in modern frameworks and backend solutions.',
      color: '#e6e20f'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating seamless, intuitive digital experiences that captivate users and drive engagement. Blending creativity with usability for maximum impact.',
      color: '#e6e20f'
    },
    {
      title: 'Logo Design',
      description: 'Designing distinctive, memorable brand identities that tell your story at a glance. Simple, powerful, and timeless logos that leave a lasting impression.',
      color: '#e6e20f'
    }
  ];

    const techIcons = [
      { icon: 'bxl-html5', color: '#E34F26', name: 'HTML5' },
      { icon: 'bxl-css3', color: '#1572B6', name: 'CSS3' },
      { icon: 'bxl-javascript', color: '#F7DF1E', name: 'JavaScript' },
      { icon: 'bxl-typescript', color: '#3178C6', name: 'TypeScript' },
      { icon: 'bxl-react', color: '#61DAFB', name: 'React' },
      { icon: 'bxl-react', color: '#FFFFFF', name: 'Next.js' },
      { icon: 'bxl-nodejs', color: '#339933', name: 'Node.js' },
      { icon: 'bxl-php', color: '#777BB4', name: 'PHP' },
      { icon: 'bxl-python', color: '#3776AB', name: 'Python' },
      { icon: 'bxl-java', color: '#007396', name: 'Java' },
      { icon: 'bxl-postgresql', color: '#4169E1', name: 'PostgreSQL' },
      { icon: 'bxl-mongodb', color: '#47A248', name: 'MongoDB' },
      { icon: 'bxl-aws', color: '#FF9900', name: 'AWS' },
      { icon: 'bxl-firebase', color: '#FFCA28', name: 'Firebase' },
      { icon: 'bxl-figma', color: '#F24E1E', name: 'Figma' },
      { icon: 'bxl-tailwind-css', color: '#06B6D4', name: 'Tailwind' },
      { icon: 'bxl-bootstrap', color: '#7952B3', name: 'Bootstrap' },
      { icon: 'bxl-git', color: '#F05032', name: 'Git' },
      { icon: 'bxl-github', color: '#FFFFFF', name: 'GitHub' },
    ];

  return (
    <>
      <section className="Ser-services" id="services">
        <div className="Ser-section-title">
          <h2>
            My <span>Services</span>
          </h2>
          <p>WHAT I CAN DO FOR YOU</p>
        </div>

        <div className="Ser-services-container">
          {services.map((service, index) => (
            <div key={index} className="Ser-services-box">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                className="Ser-btn"
                onClick={() => {
                  const modal = document.getElementById('Ser-quote-modal');
                  modal.style.display = 'flex';
                }}
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="Ser-tech-slider">
        <div className="Ser-slider-label">TECHNOLOGIES</div>
        <div className="Ser-tech-slider-track">
          {techIcons.map((item, index) => (
            <div key={index} className="Ser-tech-item">
              <i className={`bx ${item.icon}`} style={{ color: item.color }}></i>
              <span>{item.name}</span>
            </div>
          ))}
          {techIcons.map((item, index) => (
            <div key={`duplicate-${index}`} className="Ser-tech-item">
              <i className={`bx ${item.icon}`} style={{ color: item.color }}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div id="Ser-quote-modal" className="Ser-modal">
        <div className="Ser-modal-content">
          <span className="Ser-modal-close" onClick={() => {
            document.getElementById('Ser-quote-modal').style.display = 'none';
          }}>&times;</span>
          <h2>Get a <span>Quote</span></h2>
          <p>Fill in the details below and I'll get back to you within 24 hours.</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="Ser-form-group">
              <label>Your Name</label>
              <input type="text" name="user_name" placeholder="Enter your full name" required />
            </div>
            <div className="Ser-form-group">
              <label>Your Email</label>
              <input type="email" name="user_email" placeholder="Enter your email address" required />
            </div>
            <div className="Ser-form-group">
              <label>Service Interested In</label>
              <select name="service_type" required>
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Logo Design">Logo Design</option>
              </select>
            </div>
            <div className="Ser-form-group">
              <label>Project Details</label>
              <textarea name="message" rows="5" placeholder="Describe your project requirements..." required></textarea>
            </div>
            <button type="submit" className="Ser-submit-btn">Send Request</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Services;