import React from 'react';

import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={''} />
        <WeatherExtraInfo humidity={80} wind={10} />
    </div>
);

export default WeatherData;