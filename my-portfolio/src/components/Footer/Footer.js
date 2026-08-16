import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 | Avish Madushanka</p>
      </div>
      <div className="footer-iconTop">
        <a href="#home"><i className='bx bxs-up-arrow-alt'></i></a>
      </div>
    </footer>
  );
};

export default Footer;