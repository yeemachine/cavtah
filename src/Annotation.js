import React, { Component } from 'react';
import './Annotation.css';

class Annotation extends Component {
  constructor(){
    super()
  }
  render() {
    console.log(this.props.isVisible)
    return (
      <div className={(this.props.isVisible)? "Annotation show": "Annotation"}>  
        {this.props.data}
      </div>
    );
  }
}

export default Annotation;
