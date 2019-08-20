import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="App-header">
      <div className='nav'>
        <a className='item' href='#main'>
            <i className='fas fa-home'></i>
            Home
        </a>
        <a className='item' href='#about'>About</a>
        <a className='item' href='#projects'>Projects</a>
        <a className='item' href='#tech-stack'>Tech Stack</a>
      </div>
    </header>
  );
}
