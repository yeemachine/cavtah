import React, { Component } from 'react';
import './Annotation.css';

class Annotation extends Component {
  constructor(props){
    super(props)
    this.createAnnotations = this.createAnnotations.bind(this)
    // this.state = props
  }
  createAnnotations(){
    let annotations = []
    let uniqueKey = 0
    Object.keys(this.props.data).forEach((e,i)=>{
      let filteredArray = this.props.data[e].text.split(/\{\{|\}\}/g); 
      let textArray = []
      filteredArray.forEach((f)=>{
        if(f.substring(0,2) === 'I:'){
          textArray.push(<i key={'I'+uniqueKey}>{f.substring(2)}</i>)
        }else if(f.substring(0,2) === 'B:'){
          textArray.push(<b key={'B'+uniqueKey}>{f.substring(2)}</b>)
        }else{
          textArray.push(f)
        }
        uniqueKey += 1
      })
      
      let child = <p key={e} className={this.props.data[e].isVisible ? 'show' : null}>
            <b className="footnote">{i+1}</b>
            {textArray}
          </p>
      annotations.push(child)
    })
    return annotations
  }
  componentDidMount(){
  }
  render() {
    let content = this.createAnnotations()
    return (
      <div className={"Annotation"}>  
        {
          content
        }
      </div>
    );
  }
}

export default Annotation;
