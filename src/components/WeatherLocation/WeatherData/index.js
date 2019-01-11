import React from 'react';
import PropTypes from 'prop-types';

import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

import '../../style.scss';

const WeatherData = ({ dataProps }) => {
    const { temperatureProps, weatherStateProps, humidityProps, windProps } = dataProps;

    return (
        <div className="WeatherData">
            <WeatherTemperature temperature={temperatureProps} weatherState={weatherStateProps} />
            <WeatherExtraInfo humidity={humidityProps} wind={windProps} />
        </div>
    );
};

WeatherData.propTypes = {
    dataProps: PropTypes.shape({
        temperatureProps: PropTypes.number.isRequired,
        weatherStateProps: PropTypes.string.isRequired,
        humidityProps: PropTypes.number.isRequired,
        windProps: PropTypes.number.isRequired
    })
}

export default WeatherData;