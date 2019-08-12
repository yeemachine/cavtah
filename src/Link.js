import React, { Component } from 'react';
import './Link.css';

class Link extends Component {
  constructor(){
    super()
    this.state = {}
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.click = this.click.bind(this)
  }
  mouseEnter(){
    let linkKey = this.props.text.replace(/ /g,"_").toLowerCase()
    let stateObj = (this.props.currentLink === linkKey) ? {
        carousel:false,
        currentLink:linkKey,
      } : {
        carousel:false,
        currentLink:linkKey,
        time:0
      }
    this.props.callback(stateObj)
  }
  mouseLeave(){
    if(this.props.selected !== this.props.text){
      let stateObj = {
        carousel:true
      }
      this.props.callback(stateObj)
    }
  }
  click(){
    let linkKey = this.props.text.replace(/ /g,"_").toLowerCase()
    let stateObj = {
        gallery:true,
        selected:this.props.text,
        currentLink:linkKey,
    }
    this.props.callback(stateObj)
  }
  componentDidMount(){
  }
  render() {
    let classes = ['Link']
    if(this.props.selected === this.props.text){
      classes.push('selected')
    }
    if(this.props.currentLink === this.props.text.replace(/ /g,"_").toLowerCase()){
      classes.push('currentLink')
    }
    return (
      <span 
        className={classes.join(' ')} 
        onMouseEnter={(!this.props.isMobile) ? this.mouseEnter : null} 
        onMouseLeave={(!this.props.isMobile) ? this.mouseLeave : null} 
        onClick={(!this.props.isMobile) ? this.click : null} 
        onTouchStart={(this.props.isMobile) ? this.click : null}
        data-text={this.props.text}
      >
        {this.props.text}
      </span>
    );
  }
}

export default Link;
