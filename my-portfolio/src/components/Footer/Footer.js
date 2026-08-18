import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; {currentYear} | Avish Madhushanka</p>
      </div>
      <div className="footer-iconTop">
        <a href="#home" aria-label="Back to top">
          <i className='bx bxs-up-arrow-alt'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;