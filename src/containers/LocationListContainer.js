// Dependencies.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions for redux.
import { setSelectedCity, setWeather } from '../actions/';

// Reducers.
import { getCitiesWeather } from '../reducer';

// Components.
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {
    componentDidMount() {
        const { setWeather, cities } = this.props;
        setWeather(cities);
    }

    handleSelectedLocation = (city) => {
        const { dispatchSetCity } = this.props;
        dispatchSetCity(city);
    }

    render() {
        const { citiesWeather } = this.props;

        return (
            <div>
                <LocationList
                    cities={citiesWeather}
                    onSelectedLocation={this.handleSelectedLocation}
                />
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity : PropTypes.func.isRequired,
    cities : PropTypes.array.isRequired,
    citiesWeather : PropTypes.array,
};

const mapStateToProps = (state) => ({
    citiesWeather : getCitiesWeather(state)
});

/* Esta funcion es el segundo parametro que recibe la funcion "connect", debe recibir como parametro el metodo "dispatch" de redux. Esta funcion debe retornar
un objeto, cuya clave del objeto va a ser un props valido para el componente de clase. Para asignarle un valor a esta clave props, esta misma debe valer una funcion
con su respectivo parametro (solo si aplica) y esta va a retornar el metodo dispatch con parametro la action que importamos previamente, en este caso
"setCity(value)" */
const mapDispatchToPorps = (dispatch) => (
    {
        dispatchSetCity: value => dispatch(setSelectedCity(value)),
        setWeather: cities => dispatch(setWeather(cities)),
    }
);

/* La siguiente linea exporta por defecto el componente de clase con sus respectivos actions, states y props al store. La funcion "connect" y el resultado
de esta misma es otra funcion la cual pide un parametro, cuyo parametro debe ser el nombre del componente de clase, en este caso "App" */
export default connect(mapStateToProps, mapDispatchToPorps)(LocationListContainer);