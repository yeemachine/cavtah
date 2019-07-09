import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './svg.css';

class SVG extends Component {
  constructor(props){
    super()
    this.state = {
    };
  }
  componentDidMount(){
    //test passing state to parent
    console.log('Mounted')
  }
  componentDidUpdate(oldProps) {
    let DOM_Node = ReactDOM.findDOMNode(this)
    if(oldProps.data){
      console.log(oldProps.data,this.props.data,this)
    }
  }
  render() {
    if(this.props.data){
      return (
        <div dangerouslySetInnerHTML={{__html: this.props.data.data}} className={['svgContainer show'].join(' ')}>
        </div>   
      );
    }else{
      return null
    }
  }
}

export default SVG;
