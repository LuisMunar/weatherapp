import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import Location from './Location';
import WeatherData from './WeatherData/';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';

import '../style.scss';

class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            cityState: city,
            dataState: null
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
        const api_weather = getUrlWeatherByCity(this.state.cityState);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                dataState: newWeather
            });
        });
    }

    render() {
        const { onWeatherLocationClick } = this.props;
        const { cityState, dataState } = this.state;

        return (
            <div className="WeatherLocation" onClick= { onWeatherLocationClick }>
                <Location city={cityState} />
                {dataState ? <WeatherData dataProps={dataState} /> : <CircularProgress className="colorPregress" />}
            </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;