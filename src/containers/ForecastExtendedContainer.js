// Dependencies.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React-redux
import { connect } from 'react-redux';

// Components.
import ForecastExtended from '../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const { city } = this.props;
        return (
            city && <ForecastExtended city={ city }/>
            /*el "&&" indica null, osea que si la constante "city", definida previamente en el render, no esta o no contiene ningun valor, entonces
            nada se va a mostra en el componente "ForecastExtended", de lo contrario se va a mostrar el contenido de al constante "city"*/
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city : PropTypes.string.isRequired
};

const mapStateToProps = (state) => (
    { city : state.city }
)
/* Si aplicamos destructurin la funcion mapStateToProps quesaria de la siguiente manera:
    const mapStateToProps = ({ city }) => (
        { city }
    )
Esto debido a que en el parametro estamos indicando que tomamos del objeto del estado la clave city
y como debemos devolver como resultado un objeto, le decimos que nuestra clave en la funcion va a ser city
y como el parametro tambien devuelve una clave city, entonces basta con retornar solo city en el objeto.
*/

export default connect(mapStateToProps, null)(ForecastExtendedContainer);