import React, { Component } from 'react';

import './App.css';
import Grid from './Grid.js'
import Nav from './Nav.js'
import Mission from './Mission.js'
import Annotation from './Annotation.js'
import SVG from './svg.js';

import {isMobile} from 'react-device-detect';

import Firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './FirebaseConfig.js'

class App extends Component {
  constructor(){
    super();
    Firebase.initializeApp(firebaseConfig);
    this.state = {
      currentLink:null,
      gallery:false,
      carousel:true,
      annotationVisible:{},
      linkOrder:null,
      selected:null,
      time: 0,
      isMobile: isMobile
    }
    this.svgs = null
    this.callback = this.callback.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.getFirebaseData = this.getFirebaseData.bind(this)
  }
  
  getFirebaseData(){
    let ref = Firebase.database().ref('/phase1');
    ref.once('value', snapshot => {
      const state = snapshot.val();
      this.setState({
        firebase:state
      },()=>{
        this.svgs = this.preloadSVG()
        this.startTimer()
      });
    });
  }
  
  callback(stateObj){
    this.setState(stateObj,()=>{
      console.log(this.state)
    })
  }
  
  startTimer(){
    if(this.state.time < 1){
      this.setState({
        time: this.state.time + .00385
      })   
    }else{
      if(this.state.carousel && this.state.linkOrder){
        let linkNames = this.state.linkOrder
        let currentID = linkNames.indexOf(this.state.currentLink)
        let nextID = (currentID+1 >= linkNames.length) ? 0 : currentID+1
        let nextArtist = linkNames[nextID]
        this.setState({
          time: 0,
          currentLink: (!this.state.gallery) ? nextArtist : this.currentLink
        })
      }
    }
    requestAnimationFrame(this.startTimer)
  }

  preloadSVG(){
    let xhrObj = {}
    for (const [key, value] of Object.entries(this.state.firebase.images)) {
      if(value.url.includes("svg")){
        let xhr = new XMLHttpRequest();
        xhr.open("GET",value.url,true);
        xhr.overrideMimeType("image/svg+xml");
        xhr.onload = (e) => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                xhrObj[key] = {}
                xhrObj[key].data = xhr.responseText
            } else {
              console.error(xhr.statusText);
            }
          }
        };
        xhr.onerror = function (e) {
          console.error(xhr.statusText);
        };
        xhr.send(null); 
      }else{
        xhrObj[key]={}
        xhrObj[key].data = '<img src="'+value.url+'"/>'
      }
    }
    return xhrObj
  }
  
  componentDidMount(){
    this.getFirebaseData()
  }
  
  render() {
    let content = (this.state.firebase && this.svgs) ? [
        <Grid key="Grid"/>,
        <Nav 
          key="Nav"
          callback={this.callback} 
          data={this.state.firebase.nav}
        />,
        <Mission 
          key="Mission"
          isMobile={this.state.isMobile}
          callback={this.callback} 
          data={this.state.firebase.mission} 
          gallery={this.state.gallery}
          selected={this.state.selected}
          currentLink={this.state.currentLink}
          annotations={this.state.firebase.annotations}
        />,  
        <SVG
          key="SVG"
          isMobile={this.state.isMobile}
          callback={this.callback} 
          carousel={this.state.carousel}
          data={this.svgs[this.state.currentLink]} 
          currentLink={this.state.currentLink}
          caption={(this.state.currentLink) ? this.state.firebase.images[this.state.currentLink].caption : null}
          gallery={this.state.gallery}
        />,
        <Annotation 
          key="Annotation"
          callback={this.callback} 
          data={this.state.firebase.annotations} 
        />
        ] : null
    
    return (
      <div className={this.state.gallery ? "App gallery" : "App"}>
        {content}
      </div>
    );
  }
}

export default App;
