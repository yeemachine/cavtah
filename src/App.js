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
     currentArtist : 'rembrandt',
      svgLoaded:false
    }
    this.svgs = this.preloadSVG()
    this.callback = (stateObj) => {
      this.setState(stateObj,()=>{
        console.log(this.state)
      })
    }
  }
  preloadSVG(){
    let xhrObj = {}
    for (const [key, value] of Object.entries(this.data.images)) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET",value.url,true);
    xhr.overrideMimeType("image/svg+xml");
    xhr.onload = (e) => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            xhrObj[key] = {}
            xhrObj[key].data = xhr.responseText
            xhrObj[key].align = value.align
            xhrObj[key].startColumn = value.startColumn
          
            if(Object.keys(xhrObj).length === Object.keys(this.data.images).length){
              this.setState({svgLoaded: true})
            }
          
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null); 
    }
    
    return xhrObj
  }
  componentDidMount(){
  }
  render() {
    return (
      <div className="App">
        <Grid />
        <Nav callback={this.callback} data={this.data.nav}/>
        <Mission callback={this.callback} data={this.data.mission}/>  
        <SVG callback={this.callback} data={this.svgs[this.state.currentArtist]}/>
        <Annotation callback={this.callback} data={this.data.annotation}/>
      </div>
    );
  }
}

export default App;
