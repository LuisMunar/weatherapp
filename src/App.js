import React, { Component } from 'react';

import './App.scss';
import LocationList from './components/LocationList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList />
      </div>
    );
  }
}

export default App;
