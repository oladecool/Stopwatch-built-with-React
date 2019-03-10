import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div align="center">
      <h2>Welcome to Timer App built with React.js</h2>
       <Timer start={Date.now()}/>
      </div> 
    );
  }
}

export default App;
