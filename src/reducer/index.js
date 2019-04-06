// Dependencies.
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

// Reducers.
import { city } from './city';
import {
    cities,
    getForecastDataFromCities as _getForecastDataFromCities,
    getCitiesWeather as _getCitiesWeather,
} from './cities';

export default combineReducers(
    {
        // Aplicamos literal string para clave valor del objeto.
        city,
        cities
    }
)

export const getCity = createSelector(
    state => state.city, // Funcion que recibe como parametro el state y retorna el valor que deceemos.
    city => city // Funcion que recibe como parametro el resultado de la funcion que toma del state y retorna clve y valor (valor es el parametro).
)

export const getForecastDataFromCities = createSelector(
    state => state.cities,
    getCity,
    _getForecastDataFromCities
)

export const getCitiesWeather = createSelector(
    state => state.cities,
    _getCitiesWeather
)