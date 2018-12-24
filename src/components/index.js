import React from 'react';

import Location from './Location';
import WeatherData from './WeatherData/';

import './style.scss';

const WeatherLocation = () => (
    <div className="WeatherLocation">
        <Location city={'Armenia'} />
        <WeatherData />
    </div>
);

export default WeatherLocation;