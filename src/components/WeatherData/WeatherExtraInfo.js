import React from 'react';
import PropTypes from 'prop-types';

import '../style.scss';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="WeatherExtraInfo">
        <span className="span-one">{`Humedad: ${humidity} %`}</span>
        <span className="span-two">{`Viento: ${wind} m/s`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;