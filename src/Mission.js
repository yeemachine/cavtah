import React, { Component } from 'react';
import './Mission.css';
import Link from './Link.js';
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
    this.linkOrder = []
    let uniqueKey = 0
    this.props.data.forEach((e,i)=>{
      let filteredArray = e.split(/\{\{|\}\}/g); 
      let children = []
      filteredArray.forEach((f,j)=>{
        let child
        if(f.substring(0,1) === 'A'){
          let linkName = f.substring(2)
          child = <Link 
                    key={'A'+uniqueKey} 
                    text={linkName} 
                    isMobile={this.props.isMobile}
                    callback={this.callback} 
                    currentLink= {this.props.currentLink}
                    selected={this.props.selected}
                  />
          this.linkOrder.push(linkName.replace(/ /g,"_").toLowerCase())
        }else if(f.substring(0,1) === 'F'){
          child = <Footnote 
                    key={'F'+uniqueKey} 
                    number={f.substring(2)} 
                    callback={this.callback}
                    annotations={this.props.annotations}
                  />
        }else if(f.substring(0,1) === 'I'){
          child = <i key={'I'+uniqueKey}>{f.substring(2)}</i>
        }
        else if(f.substring(0,1) === 'B'){
          child = <b key={'B'+uniqueKey}>{f.substring(2)}</b>
        }else if(f.substring(0,1) === 'H'){
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
    this.callback({
      linkOrder:this.linkOrder,
      currentLink:this.linkOrder[0]
    })
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
