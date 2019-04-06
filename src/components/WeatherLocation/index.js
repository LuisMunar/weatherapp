import React from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import Location from './Location';
import WeatherData from './WeatherData/';

import '../style.scss';

const WeatherLocation = ({onWeatherLocationClick, city, data}) => ( // Los parametros se toman desde las props, por medio de destructurin.
    <div className="WeatherLocation" onClick= { onWeatherLocationClick }>
        <Location city={city} />
        {data ? <WeatherData dataProps={data} /> : <CircularProgress className="colorPregress" />}
    </div>
)


WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperatureProps: PropTypes.number.isRequired,
        weatherStateProps: PropTypes.string.isRequired,
        humidityProps: PropTypes.number.isRequired,
        windProps: PropTypes.number.isRequired
    }),
}

export default WeatherLocation;