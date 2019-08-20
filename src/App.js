import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
        <About />
        <Projects />
        <TechStack />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
