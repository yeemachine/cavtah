import React, { Component } from 'react';
import './Artist.css';

class Footnote extends Component {
  constructor(){
    super()
    this.state = {}
  }
  render() {
    return (
      <sup className="Footnote">{this.props.number}</sup>
    );
  }
}

export default Footnote;
