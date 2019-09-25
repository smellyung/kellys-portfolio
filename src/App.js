import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
