import { combineReducers } from 'redux';
import { city } from './city';
import { cities, getForecastDataFromCities as _getForecastDataFromCities } from './cities';

export default combineReducers(
    {
        // Aplicamos literal string para clave valor del objeto.
        city,
        cities
    }
)

export const getCity = (state) => (
    state.city
)

export const getForecastDataFromCities = (state) => (
    _getForecastDataFromCities(state.cities, getCity(state))
)