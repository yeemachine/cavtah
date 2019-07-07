import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js'
import Nav from './Nav.js'
import Mission from './Mission.js'
import Annotation from './Annotation.js'
import SVG from './svg.js';
import DATA from './DATA.js';


class App extends Component {
  constructor(){
    super();
    this.data = DATA
    this.state = {
     currentArtist : 'rembrandt'
    }
    this.getCurrentArtist = (name) => {
      this.setState({currentArtist:name},()=>{
      })
    }
  }
  componentDidMount(){
    
  }
  render() {
    
    return (
      <div className="App">
        <Grid />
        <Nav />
        <Mission data={this.data.mission}/>  
        <SVG callback={this.getCurrentArtist} data={this.data.images[this.state.currentArtist]}/>
        <Annotation />
      </div>
    );
  }
}

export default App;
