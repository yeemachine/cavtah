import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './svg.css';

class SVG extends Component {
  constructor(props){
    super()
    this.state = {
    };
    this.click = () => {
       let stateObj = {
        gallery:false
      }
      this.props.callback(stateObj)
    }
  }
  componentDidMount(){
    //test passing state to parent
    console.log('Mounted')
  }
  componentDidUpdate(oldProps) {
    let DOM_Node = ReactDOM.findDOMNode(this)
    if(oldProps.data){
      console.log(oldProps.data,this.props.data)
    }
  }
  
  render() {
    if(this.props.data){
      let classes = (this.props.gallery) ? ['svgContainer','show','gallery'] : ['svgContainer','show']
      return (
        <section className={classes.join(' ')} onClick={this.click}>
          <div dangerouslySetInnerHTML={{__html: this.props.data.data}}></div>
        </section>   
      );
    }else{
      return null
    }
  }
}

export default SVG;
