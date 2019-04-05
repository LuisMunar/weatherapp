import React from 'react';
import PropTypes from 'prop-types';

import ForecastItem from './ForecastItem/';
import './style.scss';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map(
        forecast => <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} week_day={forecast.weekDay} hour={forecast.hour} dataProps={forecast.data} />
    );
}

const renderProgress = () => {
    return <h3>Cargando pronostico extendido...</h3>
}

// Cuando envolvemos los parametros entre llaves, estamos indicando que toman esos valores desde los props validados.
const ForecastExtended = ({city, forecastData}) => (
    <div className="ForecastExtended">
        <h2 className="h2">Pronostico extendido {city}</h2>
        {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
    </div>
)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;