import React, { Component } from 'react';

import './App.scss';
import LocationList from './components/LocationList';

class App extends Component {
  render() {
    const cities = [
      'Armenia,col',
      'Lima,pe',
      'Washington,us',
      'Buenos Aires,ar'
    ]

    return (
      <div className="App">
        <LocationList cities={cities} />
      </div>
    );
  }
}

export default App;
