import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className='nav'>
      <nav>
        <div>
          <ul className='socials'>
            <li><a href='https://github.com/smellyung'><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>
            <li><a href='https://www.linkedin.com/in/kelly-ung/'><FontAwesomeIcon icon={faLinkedin} size="2x"/></a></li>
            <li><a href='mailto: kellyung@hotmail.co.uk'><FontAwesomeIcon icon={faEnvelope} size="2x"/></a></li>
          </ul>
          <ul>
            <li><a href='#main'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skill-section'>Skills</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}