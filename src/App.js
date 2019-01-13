import React, { Component } from 'react';

import './App.scss';
import LocationList from './components/LocationList';

class App extends Component {
  handleSelectedLocation = (city) => {
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    const cities = [
      'Armenia,col',
      'Lima,pe',
      'Washington,us',
      'Buenos Aires,ar'
    ]

    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

export default App;
