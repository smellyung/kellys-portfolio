import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        nav
      </header>
      <div className='main'>
        <h1>Kelly's Portfolio</h1>
        <p>Web Developer</p>
        <p>Contact now!</p>
      </div>
      <div className='about'>
        <h1>About</h1>
        <p>
          Hi, my name is Kelly. I'm a web developer based in London, looking for opportunies in web development.
          A graduate from Queen Mary University of London, with a First Class Honours BSc Mathematics degree. (big flex)
        </p>
        <p>
          I've had exposure to the tech world - working in digital at British Gas and helping to build new features on their responsive Beta app. 
          I learnt a lot about writing clean and readable code, collaboration and agile methodologies. 
        </p>
        <p>
          I am currently a student at Kodiri Bootcamp, refining my existing skills by learning to build beautiful, fully responsive apps from scratch!
          Navigate to the following sections to find out more about the <a>tech stack</a> used and <a>projects</a> I've worked on.
        </p>
      </div>
      <div className='projects'>
        <h1>Projects</h1>
      </div>
      <div className='skills'>
      </div>
    </div>
  );
}

export default App;
