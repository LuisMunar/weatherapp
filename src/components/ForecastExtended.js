import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getUrlForecastByCity from '../services/getUrlForecastByCity';
import transformForecast from '../services/transformForecast';
import ForecastItem from './ForecastItem/';
import './style.scss';

/*const data = {
    temperatureProps: 10,
    weatherStateProps: 'sun',
    humidityProps: 15,
    windProps: 25
};

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
]*/

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        const api_forecast = getUrlForecastByCity(this.props.city);
        fetch(api_forecast)
        .then(
            data => (data.json())
        )
        .then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData)
                this.setState({forecastData});
            }
        );
    }

    renderForecastItemDays = (forecastData) => {
        return forecastData.map(forecast => <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} week_day={forecast.weekDay} hour={forecast.hour} dataProps={forecast.data} />);
    }

    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div className="ForecastExtended">
                <h2 className="h2">Pronostico extendido {city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;