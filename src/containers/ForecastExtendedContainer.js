// Dependencies.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React-redux
import { connect } from 'react-redux';

// Selectors of reducers.
import { getCity, getForecastDataFromCities } from '../reducer';

// Components.
import ForecastExtended from '../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city && // && valida que este definido, en caso tal de que no este definido, devuelve null.
            <ForecastExtended
                city={ city }
                forecastData={ forecastData }
            />
        );
    }
}

//Validamos lo props que viene desde el estado global de la app (el estado global lo trae la funcion mapStateToProps).
ForecastExtendedContainer.propTypes = {
    city : PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const mapStateToProps = (state) => (
    {
        city: getCity(state),
        forecastData : getForecastDataFromCities(state)
    }
)
/*
Si aplicamos destructurin la funcion mapStateToProps quesaria de la siguiente manera:
    const mapStateToProps = ({ city }) => (
        { city }
    )
Esto debido a que en el parametro estamos indicando que tomamos city del estado global de la app, y retornamos solo {city} por que son la misma clave valor.

Si no aplicamos destructurin la funcion quedaria de la siguiente manera:
    const mapStateToProps = (state) => (
        { city : state.city }
    )
donde state contiene el estado global de la app.
*/

export default connect(mapStateToProps, null)(ForecastExtendedContainer);