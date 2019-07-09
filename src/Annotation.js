import React, { Component } from 'react';
import './Annotation.css';

class Annotation extends Component {
  render() {
    return (
      <div className="Annotation">  
        {this.props.data}
      </div>
    );
  }
}

export default Annotation;
