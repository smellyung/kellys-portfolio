import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    return (
        <div className='container' id='skill-section'>
          <h1>Skills</h1>
          <div className='skills'>
            <div><FontAwesomeIcon icon={faJsSquare} size="6x"/></div>
            <div><FontAwesomeIcon icon={faCss3Alt} size="6x"/></div>
            <div><FontAwesomeIcon icon={faHtml5} size="6x"/></div>
            <div><FontAwesomeIcon icon={faReact} size="6x"/></div>
            <div><FontAwesomeIcon icon={faNode} size="6x"/></div>
            <div><FontAwesomeIcon icon={faGit} size="6x"/></div>
          </div>
        </div>
    );
}