import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} m/s viento`}</span>
    </div>
);

export default WeatherExtraInfo;