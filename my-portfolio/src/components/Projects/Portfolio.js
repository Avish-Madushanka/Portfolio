import React, { useEffect, useRef, useState } from 'react';
import mixitup from 'mixitup';
import ScrollReveal from 'scrollreveal';
import './Portfolio.css';

const Portfolio = () => {
  const galleryRef = useRef(null);
  const mixerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      categories: ['ui'],
      image: require('../../assets/images/reader.jpeg'),
      title: 'MR Cheers - Liquor Store Mobile App',
      description: 'Designed using Figma',
      link: 'https://www.behance.net/gallery/177788563/Liquor-Store-Mobile-App-UI-Design'
    },
    {
      categories: ['ui', 'other'],
      image: require('../../assets/images/bakery.jpeg'),
      title: 'Bakery Management System',
      description: 'Designed and Developed using Visual Studio Winforms(C#)',
      link: 'https://www.behance.net/gallery/177702299/Bakery-Management-System',
      github: 'https://www.behance.net/gallery/177702299/Bakery-Management-System'
    },
    {
      categories: ['web'],
      image: require('../../assets/images/drivex.jpeg'),
      title: 'Drivex Automobile Website',
      description: 'Developed using HTML, CSS, JS, Bootstrap and PHP',
      link: '#'
    },
    {
      categories: ['web'],
      image: require('../../assets/images/futurehome.png'),
      title: 'Future Homes Construction Website',
      description: 'Developed using HTML, CSS, JS, Bootstrap and PHP',
      link: 'https://futurehomesengineering.github.io/website/'
    },
    {
      categories: ['ui'],
      image: require('../../assets/images/onoff.png'),
      title: 'On/Off Toggle Button',
      description: 'Designed using Figma',
      link: 'https://www.behance.net/gallery/177624847/OnOff-Toggle-Button'
    },
    {
      categories: ['flyers'],
      image: require('../../assets/images/ass1.jpeg'),
      title: 'Assignment Writing Service',
      description: 'Flyer designed for AviOniks using Figma',
      link: 'https://www.behance.net/gallery/177634611/Assignment-Writing-Advertisement'
    },
    {
      categories: ['flyers'],
      image: require('../../assets/images/ass2.jpeg'),
      title: 'Assignment Writing Service',
      description: 'Flyer designed for AviOniks using Figma',
      link: 'https://www.behance.net/gallery/177633967/Assignment-Writing-Advertisement'
    }
  ];

  const filterButtons = [
    { filter: 'all', label: 'All' },
    { filter: '.web', label: 'Websites' },
    { filter: '.flyers', label: 'Flyers' },
    { filter: '.ui', label: 'UI Designs' },
    { filter: '.other', label: 'Other' }
  ];

  useEffect(() => {
    // Initialize MixItUp
    if (galleryRef.current) {
      mixerRef.current = mixitup(galleryRef.current, {
        selectors: {
          target: '.port-box'
        },
        animation: {
          duration: 300
        }
      });
    }

    // ScrollReveal for portfolio items
    ScrollReveal().reveal('.port-box', { 
      origin: 'bottom',
      distance: '80px',
      duration: 2000,
      delay: 200,
      interval: 100
    });

    return () => {
      if (mixerRef.current) {
        mixerRef.current.destroy();
      }
    };
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (mixerRef.current) {
      if (filter === 'all') {
        mixerRef.current.filter('all');
      } else {
        mixerRef.current.filter(filter);
      }
    }
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="container">
        <div className="filter-buttons">
          {filterButtons.map(btn => (
            <button 
              key={btn.filter}
              className={`btnp ${activeFilter === btn.filter ? 'active' : ''}`}
              onClick={() => handleFilter(btn.filter)}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="portfolio-gallery" ref={galleryRef}>
          {portfolioItems.map((item, index) => (
            <div key={index} className={`port-box mix ${item.categories.join(' ')}`}>
              <div className="port-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="port-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="icon-container">
                  <a href={item.link} className="icon-circle" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link'></i>
                  </a>
                  {item.github && (
                    <a href={item.github} className="icon-circle" target="_blank" rel="noopener noreferrer">
                      <i className='bx bxl-github'></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;