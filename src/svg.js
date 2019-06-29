import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './svg.css';

class SVG extends Component {
  constructor(){
    super()
    this.rendered = false
  }
  componentDidMount(){
    this.rendered = true
    const node = ReactDOM.findDOMNode(this)
    let xhr = new XMLHttpRequest();
    xhr.open("GET",this.props.data,true);
    xhr.overrideMimeType("image/svg+xml");
    xhr.onload = (e) => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // console.log(xhr.responseText);
          node.innerHTML=xhr.responseText
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null); 
  }
  render() {
    return (
      <div className="svgContainer"></div>   
    );
  }
}

export default SVG;
