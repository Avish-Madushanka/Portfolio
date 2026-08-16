import React, { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/AboutUs/About';
import Services from './components/Services/Services';
import Portfolio from './components/Projects/Portfolio';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;