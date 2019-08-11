import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './svg.css';

class SVG extends Component {
  constructor(props){
    super()
    this.state = {
    };
    this.click = this.click.bind(this)
  }
  click(){
    let stateObj = {
        carousel:!this.props.carousel,
        gallery:!this.props.gallery,
        time:0
      }
    this.props.callback(stateObj)
  }
  componentDidMount(){
    //test passing state to parent
  }
  componentDidUpdate(oldProps) {
    let timeout
    let DOM_Node = ReactDOM.findDOMNode(this)
    if(DOM_Node){
      if(oldProps.data !== this.props.data || oldProps.gallery !== this.props.gallery){
        clearTimeout(timeout)
        DOM_Node.classList.remove('animation');
        timeout = setTimeout(()=>{
          DOM_Node.classList.add('animation');
        },100)
      }
    }
  }
  
  createCaption(){
    let filteredArray = this.props.caption.split(/\{\{|\}\}/g); 
      let textArray = []
      filteredArray.forEach((f)=>{
        if(f.substring(0,2) === 'I:'){
          textArray.push(<i key={f.substring(2)}>{f.substring(2)}</i>)
        }else if(f.substring(0,2) === 'B:'){
          textArray.push(<b key={f.substring(2)}>{f.substring(2)}</b>)
        }else{
          textArray.push(f)
        }
      })
    return textArray
  }
  
  render() {
    if(this.props.data){
      let classes = (this.props.gallery) ? ['svgContainer','show','gallery'] : ['svgContainer','show']
      let caption = this.createCaption()
      return (
        <section className={classes.join(' ')} onClick={this.click}>
          <svg className="mobileProg" height="100" width="100">
            <circle cx="50" cy="50" r="48" strokeWidth="4" fill="transparent"/>
            <circle cx="50" cy="50" r="48" strokeWidth="4" fill="transparent"/>
          </svg>
          <div dangerouslySetInnerHTML={{__html: this.props.data.data}}></div>
          <p>{caption}</p>
        </section>   
      );
    }else{
      return null
    }
  }
}

export default SVG;
