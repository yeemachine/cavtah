import React, { Component } from 'react';
import './Mission.css';
import Artist from './Artist.js';
import Footnote from './Footnote.js';
import Header3 from './Header3.js';


class Mission extends Component {
  constructor(props){
    super()
    this.state = {
      content:""
    }
    this.callback = this.callback.bind(this)
  }
  callback(stateObj){
    this.setState(stateObj,()=>{
        this.props.callback(stateObj)
    })
  }
  processData(){
    let processedArray = []
    let uniqueKey = 0
    this.props.data.forEach((e,i)=>{
      let filteredArray = e.split(/\{\{|\}\}/g); 
      let children = []
      filteredArray.forEach((f,j)=>{
        let child
        if(f.substring(0,2) === 'A:'){
          let artistName = f.substring(2)
          child = <Artist 
                    key={'A'+uniqueKey} 
                    name={artistName} 
                    isMobile={this.props.isMobile}
                    callback={this.callback} 
                    currentArtist= {this.props.currentArtist}
                    selected={this.props.selected}
                  />
        }else if(f.substring(0,2) === 'F:'){
          child = <Footnote 
                    key={'F'+uniqueKey} 
                    number={f.substring(2)} 
                    callback={this.callback}
                    annotations={this.props.annotations}
                  />
        }else if(f.substring(0,2) === 'I:'){
          child = <i key={'I'+uniqueKey}>{f.substring(2)}</i>
        }
        else if(f.substring(0,2) === 'B:'){
          child = <b key={'B'+uniqueKey}>{f.substring(2)}</b>
        }else if(f.substring(0,2) === 'H:'){
          child = <Header3 
                    key={'H'+uniqueKey} 
                    text={f.substring(2)} 
                    callback={this.callback}
                  />
        }
        else{
          child = f
        }
        uniqueKey += 1
        children.push(child)
      })
      processedArray.push(<div key={'p'+i}>{children}</div>)
    })
    return(processedArray)
    // this.setState({content:processedArray})
  }
  componentDidMount(){
    // this.processData()
  }
  render(){
    return (
      <div className={"Mission"}>
        <section>
          {this.processData()}
        </section>       
     </div>
    );
  }
}

export default Mission;
