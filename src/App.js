import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Card
          category="Projects"
          main="Basketball Workout Generator"
          tech="Javascript, Node, React, ReactBootstrap, ReactRouter, Jest"
        />
      </div>
    );
  }
}

export default App;
