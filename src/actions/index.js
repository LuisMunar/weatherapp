// Services.
import getUrlForecastByCity from '../services/getUrlForecastByCity';
import transformForecast from '../services/transformForecast';
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';
import transformWeather from '../services/transformWeather';

/* Estas son las constantes que se van a encargar de identificar cada acciones y siempren seran usadas
en el action creactor (actionCreator). */
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

/* Este es el action creator (actionCreator) que se va a encargar de contener todas las acciones que se van a despachar al store
por medio del metodo store.dispatch(), el store.dispatch siempre va a estar en el interior del componente clase. */

// Accions.
const setCity = (payload) => (
  {
    type : SET_CITY,
    payload
  }
);

const setForecastData = (payload) => (
  {
    type : SET_FORECAST_DATA,
    payload
  }
);

const getWeatherCity = (payload) => (
    {
        type : GET_WEATHER_CITY,
        payload
    }
);

const setWeatherCity = (payload) => (
    {
        type : SET_WEATHER_CITY,
        payload
    }
);

export const setSelectedCity = (payload) => {
  return dispatch => {
    const api_forecast = getUrlForecastByCity(payload);
    // Accion que establece ciudad actual en el store.
    dispatch(setCity(payload));
    // Fetch.
    return fetch(api_forecast)
    .then(
      data => (data.json())
    )
    .then(
      weather_data => {
        const forecastData = transformForecast(weather_data);
        // Accion que estable el nuevo estado con el resultado del fetch.
        dispatch(setForecastData({city : payload, forecastData}));
      }
    );
  }
}

export const setWeather = (payload) => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = getUrlWeatherByCity(city);
            fetch(api_weather).then(resolve => {
                return resolve.json();
            }).then(data => {
                const weather = transformWeather(data);
                dispatch(setWeatherCity({city, weather}));
            });
        })
    }
}