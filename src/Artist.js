import React, { Component } from 'react';
import './Artist.css';

class Artist extends Component {
  constructor(){
    super()
    this.state = {}
  }
  render() {
    return (
      <span className="Artist">{this.props.name}</span>
    );
  }
}

export default Artist;
