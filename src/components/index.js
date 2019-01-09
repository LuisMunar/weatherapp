import React, { Component } from 'react';

import Location from './Location';
import WeatherData from './WeatherData/';

import './style.scss';

import {
    SUNNY,
    FOG
} from '../constants/weathers';

const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
const location = 'Bogota,co';
const api_key = '53693ad6eec34705172c7d89d8ecb8ba';
const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;

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

    handleUpdateClick = () => {
        fetch(api_weather);
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
                <button onClick={this.handleUpdateClick} className="button">Actualizar</button>
            </div>
        )
    }
}

export default WeatherLocation;