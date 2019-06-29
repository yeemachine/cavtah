import React, { Component } from 'react';
import './App.css';
import SVG from './svg.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SVG data="https://cdn.glitch.com/c8411ee0-b2bb-481b-8835-6b597f185b9c%2FMerode%20Altarpiece-vector.svg?v=1561795513950"/>      
      </div>
    );
  }
}

export default App;
