import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js'
import Nav from './Nav.js'
import Mission from './Mission.js'
import Annotation from './Annotation.js'
import SVG from './svg.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
        <Nav />
        <Mission />  
        <SVG data="https://cdn.glitch.com/c8411ee0-b2bb-481b-8835-6b597f185b9c%2FRembrandt.svg?v=1562400002010"/>
        <Annotation />
      </div>
    );
  }
}

export default App;
