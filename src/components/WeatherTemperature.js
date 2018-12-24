import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: 'day-sunny',
    lunar_eclipse: 'lunar-eclipse'
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
    <div>
        <span>
            <WeatherIcons name={getWeatherIcons(weatherState)} size="1x" />
            <span>{` - ${temperature} C°`}</span>
        </span>
    </div>
);

export default WeatherTemperature;