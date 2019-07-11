import React, { Component } from 'react';
import './Artist.css';

class Artist extends Component {
  constructor(){
    super()
    this.state = {}
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.click = this.click.bind(this)
  }
  mouseEnter(){
    let stateObj = {
        currentArtist:this.props.name.replace(/ /g,"_").toLowerCase(),
        carousel:false
      }
    this.props.callback(stateObj)
  }
  mouseLeave(){
    let stateObj = {
        carousel:true
      }
    this.props.callback(stateObj)
  }
  click(){
    let stateObj = {
        gallery:true
      }
    this.props.callback(stateObj)
  }
  componentDidMount(){
  }
  render() {
    return (
      <span className="Artist" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.click} data-text={this.props.name}>{this.props.name}</span>
    );
  }
}

export default Artist;
