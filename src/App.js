import React, { Component } from 'react';

import './App.scss';
import WeatherLocation from './components/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation />
      </div>
    );
  }
}

export default App;
