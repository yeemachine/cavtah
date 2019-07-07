import React, { Component } from 'react';
import './Mission.css';

class Mission extends Component {
  constructor(props){
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="Mission">
        <section>
          {this.props.data}
        </section>       
     </div>
    );
  }
}

export default Mission;
