import React from 'react';
import './App.css';
import Landing from './landing/Landing';
import Navigation from './nav/Navigation';
import Resume from './resume/Resume';
import About from './about/About';
import Skills from './skills/skills';
import { Link, animateScroll as scroll } from "react-scroll";

import { BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navigation />
        <div className="container">
        <div className="cover"></div>
        <div id="landing">
        <Landing/>
        </div>
        
        <div id="about">
         <About/>
         </div>
          <div id="resume">
        <Resume/>
        </div>
        
        <div id="skills">
        <br/><br/><br/>
        <Skills/>
        </div>
        <br/><br/>
        </div>
        <br/><br/><br/><br/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
