import React from 'react';
import PropTypes from 'prop-types';

import '../style.scss';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="WeatherExtraInfo">
        <span className="span-one">{`${humidity} % humedad - `}</span>
        <span className="span-two">{`${wind} m/s viento`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;