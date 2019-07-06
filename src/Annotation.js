import React, { Component } from 'react';
import './Annotation.css';

class Annotation extends Component {
  render() {
    return (
      <div className="Annotation">  
        <p>
          <b className="footnote">1</b> e.g. A,”B,”C” in the first volumes of the Rembrandt Research Projects <b>Corpus of Rembrandt Paintings</b>
        </p>
      </div>
    );
  }
}

export default Annotation;
