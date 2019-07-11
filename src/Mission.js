import React, { Component } from 'react';
import './Mission.css';
import Artist from './Artist.js';
import Footnote from './Footnote.js';


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
    let artistCount = 0
    let footCount = 0
    this.props.data.forEach((e,i)=>{
      let filteredArray = e.split(/\{\{|\}\}/g); 
      let children = []
      filteredArray.forEach((f,j)=>{
        let child
        if(f.substring(0,2) === 'A:'){
          artistCount += 1
          child = <Artist key={'a'+artistCount} name={f.substring(2)} callback={this.callback}/>
        }else if(f.substring(0,2) === 'F:'){
          footCount += 1
          child = <Footnote key={'f'+footCount} number={f.substring(2)} callback={this.callback}/>
        }else{
          child = f
        }
        children.push(child)
      })
      processedArray.push(<p key={'p'+i}>{children}</p>)
    })
    return this.setState({content:processedArray})
  }
  componentDidMount(){
    this.processData()
  }
  render() {
    return (
      <div className="Mission">
        <section>
          {this.state.content}
        </section>       
     </div>
    );
  }
}

export default Mission;
