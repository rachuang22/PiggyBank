import React, { Component } from 'react';
import Doughnut from './components/Doughnut'
import Gauge from './components/Gauge'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
        <h2 id = "App-title">Welcome to PiggyBank</h2>
        </div>
        <div className = "dashboard"><Doughnut></Doughnut></div>
        <div className = "dashboard"><Gauge></Gauge> </div>
      </div>
    );
  }
}

export default App;
