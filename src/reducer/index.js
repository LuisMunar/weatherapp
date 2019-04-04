import { combineReducers } from 'redux';
import { city } from './city';
import { cities } from './cities';

export default combineReducers(
    {
        // Aplicamos literal string para clave valor del objeto.
        city,
        cities
    }
)