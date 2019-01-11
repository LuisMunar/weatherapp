import React from 'react';
import PropTypes from 'prop-types';

import WeatherLocation from './';

const strToComponents = (cities) => {
    return (
        cities.map(city => <WeatherLocation key={city} city={city} />)
    );
}

const LocationList = ({ cities }) => {
    return (
        <div className="LocationList">
            {strToComponents(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default LocationList;