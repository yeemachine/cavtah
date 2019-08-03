import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor'


class Header3 extends Component {
  constructor(props){
    super(props)
    this.state = {
      annotationVisible:false
    }
    this.visibilityChange = this.visibilityChange.bind(this)
  }
  visibilityChange(isVisible){
    let stateObj = {
      annotationVisible:isVisible
    }
    if(isVisible){
      this.setState(stateObj,()=>{
      })
    }
  }
  render() {
    
    return (
      <VisibilitySensor onChange={this.visibilityChange}>
      <h3 className={(this.state.annotationVisible) ? "show" : null}>{this.props.text}</h3>
      </VisibilitySensor>
    );
  }
}

export default Header3;
