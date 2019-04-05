// Actions.
import { SET_FORECAST_DATA } from '../actions';

// Reducer para cities.
export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            //  Traemos las variables de la acción.
            const { city, forecastData } = action.payload
            return {
                ...state,
                [city] : { forecastData } // Ojo, aca aplicamos literal string.
            }
        default:
            return state;
    }
}

export const getForecastDataFromCities = (state, city) => (
    state[city] && state[city].forecastData // && valida que este definido, en caso tal de que no este definido, devuelve null.
)