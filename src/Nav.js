import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  
  render() {
    let listItems = []
    this.props.data.people.forEach((e,i)=>{
      let listItem = <li key={'people'+i}>{e}</li>
      listItems.push(listItem)
    })
    return (
      <div className="Nav">  
       <h3>{this.props.data.title}</h3>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default Nav;
