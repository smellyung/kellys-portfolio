import React from 'react';
// import '@fortawesome/react-fontawesome';
// import '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className='nav'>
      <nav>
        <div>
          <ul className='socials'>
            <li><a href=''>github</a></li>
            <li><a href=''>linkedin</a></li>
            <li><a href='mailto: kellyung@hotmail.co.uk'>email</a></li>
          </ul>
          <ul>
            <li><a href='#main'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#tech-stack'>Tech Stack</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}