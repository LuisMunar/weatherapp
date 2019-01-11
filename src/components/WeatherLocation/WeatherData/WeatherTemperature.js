import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import '../../style.scss';

import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../../../constants/weathers';

const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstore',
    [DRIZZLE]: 'day-showers'
}

const getWeatherIcons = (weatherState) => {
    const icon = icons[weatherState];
    return icon;

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