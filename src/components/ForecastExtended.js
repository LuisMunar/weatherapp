import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import ForecastItem from './ForecastItem/';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
]

class ForecastExtended extends Component {
    renderForecastItemDays() {
        return days.map(day => <ForecastItem key={day} week_day={day} />);
    }

    render() {
        const { city } = this.props;

        return (
            <div className="ForecastExtended">
                <h2 className="h2">Pronostico extendido {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;