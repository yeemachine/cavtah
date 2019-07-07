import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './svg.css';

class SVG extends Component {
  constructor(props){
    super()
    this.state = {
      style:{
        align:props.data.align,
        startColumn:props.data.startColumn
      },
      svgData: ''
    };
    console.log(this.state)
  }
  componentDidMount(){
    //test passing state to parent
    setTimeout(()=>{this.props.callback('campin');},5000)
  }
  loadSVG(url){
    let xhr = new XMLHttpRequest();
    xhr.open("GET",this.props.data.url,true);
    xhr.overrideMimeType("image/svg+xml");
    xhr.onload = (e) => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            return this.setState({
              style:{
                align:this.props.data.align,
                startColumn:this.props.data.startColumn
              },
              svgData: xhr.responseText 
            },this.show());   
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
  show(){
    let component = ReactDOM.findDOMNode(this)
    component.classList.add('show')
  }
  render() {
    this.loadSVG()
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.svgData}} className={['svgContainer',('column_'+this.state.style.startColumn),this.state.style.align].join(' ')}>
      </div>   
    );
  }
}

export default SVG;
