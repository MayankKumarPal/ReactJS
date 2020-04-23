import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Stopwatch from './Stopwatch.js';
class App extends Component {
  

  render() {
    return (<div>
     
      <Stopwatch/>
    </div>);
  }
}

render(<App />, document.getElementById('root'));
