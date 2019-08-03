import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js'
import Nav from './Nav.js'
import Mission from './Mission.js'
import Annotation from './Annotation.js'
import SVG from './svg.js';
import DATA from './DATA.js';
import {isMobile} from 'react-device-detect';


class App extends Component {
  constructor(){
    super();
    this.data = DATA
    this.state = {
      currentArtist : null,
      svgLoaded:false,
      gallery:false,
      carousel:true,
      annotations: DATA.annotations,
      annotationVisible:{},
      selected:null,
      time: 0,
      start: 0,
      isMobile: isMobile
    }
    this.svgs = this.preloadSVG()
    this.callback = this.callback.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  
  callback(stateObj){
    this.setState(stateObj,()=>{
      // console.log(this.state)
    })
  }
  
  startTimer(){
      if(this.state.time < 1){
        
        this.setState({
          time: this.state.time + .00385
        })
        
      }else{
        
        if(this.state.carousel){
          let artistNames = Object.keys(this.data.images)
          let currentID = artistNames.indexOf(this.state.currentArtist)
          let nextID = (currentID+1 >= artistNames.length) ? 0 : currentID+1
          let nextArtist = Object.keys(this.data.images)[nextID]
          this.setState({
            time: 0,
            currentArtist: (!this.state.gallery) ? nextArtist : this.currentArtist
          })
        }
      }
      requestAnimationFrame(this.startTimer)
  }
  
  stopTimer() {
    // clearInterval(this.timer)
  }
  resetTimer() {
    this.stopTimer()
    this.setState({time: 0})
    this.startTimer()
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
    this.setState({currentArtist: Object.keys(this.data.images)[0]})
    this.startTimer()
  }
  
  render() {
    return (
      <div className={this.state.gallery ? "App gallery" : "App"}>
        <Grid />
        <Nav 
          callback={this.callback} 
          data={this.data.nav}
        />
        <Mission 
          isMobile={this.isMobile}
          callback={this.callback} 
          data={this.data.mission} 
          gallery={this.state.gallery}
          selected={this.state.selected}
          currentArtist={this.state.currentArtist}
          annotations={this.state.annotations}
        />  
        <SVG
          callback={this.callback} 
          data={this.svgs[this.state.currentArtist]} 
          caption={(this.state.currentArtist) ? this.data.images[this.state.currentArtist].caption : null}
          gallery={this.state.gallery}
        />
        <Annotation 
          callback={this.callback} 
          data={this.state.annotations} 
        />
      </div>
    );
  }
}

export default App;
