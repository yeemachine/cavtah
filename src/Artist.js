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
    let artistKey = this.props.name.replace(/ /g,"_").toLowerCase()
    let stateObj = (this.props.currentArtist === artistKey) ? {
        carousel:false,
        currentArtist:artistKey,
      } : {
        carousel:false,
        currentArtist:artistKey,
        time:0
      }
    this.props.callback(stateObj)
  }
  mouseLeave(){
    if(this.props.selected !== this.props.name){
      let stateObj = {
        carousel:true
      }
      this.props.callback(stateObj)
    }
  }
  click(){
    let artistKey = this.props.name.replace(/ /g,"_").toLowerCase()
    let stateObj = {
        gallery:true,
        selected:this.props.name,
        currentArtist:artistKey,
    }
    this.props.callback(stateObj)
  }
  componentDidMount(){
  }
  render() {
    let classes = ['Artist']
    if(this.props.selected === this.props.name){
      classes.push('selected')
    }
    if(this.props.currentArtist === this.props.name.replace(/ /g,"_").toLowerCase()){
      classes.push('currentArtist')
    }
    return (
      <span 
        className={classes.join(' ')} 
        onMouseEnter={(!this.props.isMobile) ? this.mouseEnter : null} 
        onMouseLeave={(!this.props.isMobile) ? this.mouseLeave : null} 
        onClick={this.click} 
        data-text={this.props.name}
      >
        {this.props.name}
      </span>
    );
  }
}

export default Artist;
