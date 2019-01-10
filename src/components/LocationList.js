import React from 'react';

import WeatherLocation from './';

const LocationList = () => (
    <div className="LocationList">
        <WeatherLocation city='Bogota,col' />
        <WeatherLocation city='Armenia,col' />
        <WeatherLocation city='Buenos Aires,ar' />
    </div>
);

export default LocationList;