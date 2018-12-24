import React from 'react';

import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

import '../style.scss';

import {
    SUNNY,
    FOG,
    RAIN,
    SLEET
} from '../../constants/weathers';

const WeatherData = () => (
    <div className="WeatherData">
        <WeatherTemperature temperature={20} weatherState={RAIN} />
        <WeatherExtraInfo humidity={80} wind={10} />
    </div>
);

export default WeatherData;