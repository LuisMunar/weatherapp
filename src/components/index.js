import React, { Component } from 'react';

import Location from './Location';
import WeatherData from './WeatherData/';

import './style.scss';

import {
    SUNNY,
    FOG
} from '../constants/weathers';

const dataUno = {
    temperatureProps: 5,
    weatherStateProps: SUNNY,
    humidityProps: 6,
    windProps: 7
}
const dataDos = {
    temperatureProps: 15,
    weatherStateProps: FOG,
    humidityProps: 8,
    windProps: 11
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            cityState: 'Armenia',
            dataState: dataUno
        }
    }

    handleClick = () => {
        this.setState({
            cityState: 'Bogota',
            dataState: dataDos
        });
    }

    render() {
        const { cityState, dataState } = this.state;

        return (
            <div className="WeatherLocation">
                <Location city={cityState} />
                <WeatherData dataProps={dataState} />
                <button onClick={this.handleClick}>Actualizar</button>
            </div>
        )
    }
}

export default WeatherLocation;