import React, { Component } from 'react';
import './App.css';
import OurRulesList from './OurRulesList'
import CustomRule from './CustomRule'

class App extends Component {
  render() {
    return (
      <div className="App">
    <center><h1>The Game of Mao</h1>
    <CustomRule />
    <OurRulesList />
    </center>
      </div>
      
    );
  }
}

export default App;
