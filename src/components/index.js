import React, { Component } from 'react';

import Location from './Location';
import WeatherData from './WeatherData/';

import './style.scss';
import {
    SUNNY
} from '../constants/weathers';

const data = {
    temperatureProps: 5,
    weatherStateProps: SUNNY,
    humidityProps: 6,
    windProps: 7
}

class WeatherLocation extends Component {
    render() {
        return (
            <div className="WeatherLocation">
                <Location city={'Armenia'} />
                <WeatherData dataProps={data} />
            </div>
        )
    }
}

export default WeatherLocation;