// Dependencies.
import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';

// Actions.
import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from '../actions';

// Reducer para cities.
export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA : {
            //  Traemos las variables de la acción.
            const { city, forecastData } = action.payload
            return {
                ...state,
                [city] : { ...state[city], forecastData, forecastDataDate: new Date() }
            }
        }
        case GET_WEATHER_CITY : {
            const city = action.payload
            return {
                ...state,
                [city] : { ...state[city], weather : null}
            }
        }
        case SET_WEATHER_CITY : {
            const { city, weather } = action.payload;
            return {
                ...state,
                [city] : { ...state[city], weather}
            }
        }
        default:
            return state;
    }
}

export const getForecastDataFromCities = createSelector(
    (state, city) => state[city] && state[city].forecastData, // && valida que este definido, en caso tal de que no este definido, devuelve null.
    forecastData => forecastData
)

const fromObjectToArray = (cities) => (
    toPairs(cities).map(([key, value]) => ({
        key,
        name : key,
        data : value.weather
    }))
)

export const getCitiesWeather = createSelector(
    state => fromObjectToArray(state),
    cities => cities
)