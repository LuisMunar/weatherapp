import React, { Component } from 'react';

import Location from './Location';
import WeatherData from './WeatherData/';
import transformWeather from '../services/transformWeather';
import { api_weather } from '../constants/api_url';

import './style.scss';

import {
    SUNNY,
} from '../constants/weathers';

const data = {
    temperatureProps: 5,
    weatherStateProps: SUNNY,
    humidityProps: 6,
    windProps: 7
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            cityState: 'Armenia',
            dataState: data
        }
    }

    /*esta funcion es asignada por la libreria de react, se encarga de ejecutar alguna accion en el primer instante
    que se renderiza el sistema*/
    componentDidMount() {
        this.handleUpdateClick();
    }

    /*funcion encargada de realizar las consultas y actualizar el estado de los datos previamente filtrados
    mediante la funcion getData()*/
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                dataState: newWeather
            });
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