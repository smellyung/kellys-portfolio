import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

export default function Header() {
  const toggleMenu = () => {
    const navItems = document.querySelectorAll('.navbarItems');
    navItems.forEach(navItem => navItem.classList.toggle('toggleShow'));
  };
  return (
    <div className='navbar'>
      <div>
        <div className='socials'>
          <ul>
            <li><a href='https://github.com/smellyung'><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>
            <li><a href='https://www.linkedin.com/in/kelly-ung/'><FontAwesomeIcon icon={faLinkedin} size="2x"/></a></li>
            <li><a href='mailto: kellyung@hotmail.co.uk'><FontAwesomeIcon icon={faEnvelope} size="2x"/></a></li>
          </ul>
        </div>
        <div id='menu'>
          <button onClick={toggleMenu}><FontAwesomeIcon icon={faBars} size="2x"/></button>
        </div>
      </div>
      <nav className='navbarItems'>
        <div className='navItem'><a href='#main' onClick={toggleMenu}>Home</a></div>
        <div className='navItem'><a href='#about' onClick={toggleMenu}>About</a></div>
        <div className='navItem'><a href='#projects' onClick={toggleMenu}>Projects</a></div>
        <div className='navItem'><a href='#skill-section' onClick={toggleMenu}>Skills</a></div>
      </nav>
    </div>
  );
}