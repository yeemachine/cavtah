import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">  
       <h3>{this.props.data.title}</h3>
        <ul>
          {this.props.data.people}
        </ul>
      </div>
    );
  }
}

export default Nav;
