import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor'


class Footnote extends Component {
  constructor(props){
    super(props)
    this.state = {
      annotationVisible:false
    }
    this.visibilityChange = this.visibilityChange.bind(this)
  }
  visibilityChange(isVisible){
    let stateObj = this.props.annotations
    stateObj["f"+this.props.number].isVisible = isVisible
    this.setState(stateObj,()=>{
    })
  }
  render() {
    
    return (
      <VisibilitySensor onChange={this.visibilityChange}>
      <sup className={(this.state.annotationVisible) ? "Footnote show" : "Footnote"}>{this.props.number}</sup>
      </VisibilitySensor>
    );
  }
}

export default Footnote;
