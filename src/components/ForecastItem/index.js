import React from 'react'
import PropTypes from 'prop-types'

import WeatherData from '../WeatherLocation/WeatherData/';

const ForecastItem = ({ week_day, hour, dataProps }) => {
    return (
        <div className='ForecastItem'>
            <span className='span'>Dia: {week_day} Hora: {hour}</span>
            <WeatherData className='container-forecastitem' dataProps={dataProps} />
        </div>
    );
};

ForecastItem.propTypes = {
    week_day: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    dataProps: PropTypes.shape({
        temperatureProps: PropTypes.number.isRequired,
        weatherStateProps: PropTypes.string.isRequired,
        humidityProps: PropTypes.number.isRequired,
        windProps: PropTypes.number.isRequired
    })
};

export default ForecastItem;