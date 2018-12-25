import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import '../style.scss';

import {
    SUNNY,
    FOG,
    RAIN,
    SLEET
} from '../../constants/weathers';

const icons = {
    [SUNNY]: 'day-sunny',
    [FOG]: 'day-fog',
    [RAIN]: 'day-rain',
    [SLEET]: 'day-sleet'
}

const getWeatherIcons = (weatherState) => {
    if (weatherState) {
        const icon = icons[weatherState];
        return icon;
    }
    else {
        const icon = icons['sunny'];
        return icon;
    }
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="WeatherTemperature">
        <WeatherIcons className="icon" name={getWeatherIcons(weatherState)} size="4x" />
        <span className="span-one">{`${temperature} C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;