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
        <Annotation />
      </div>
    );
  }
}

export default App;
