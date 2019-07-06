import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js'
import Mission from './Mission.js'
import SVG from './svg.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
        <Mission />    
      </div>
    );
  }
}

export default App;
