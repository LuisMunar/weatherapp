import convert from 'convert-units';

import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../constants/weathers';

/*funcion encargada de filtrar y transformar los datos para actualizar y alimentar las cosultas*/
const transformWeather = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const temperatureProps = getTemp(temp);
    const weatherState = getWeatherState(weather_data.weather[0]);

    const data = {
        temperatureProps,
        weatherStateProps: weatherState,
        humidityProps: humidity,
        windProps: speed
    };

    return data;
}

/*funcion encargada de converdir el datos de los grados de temperatura de kelvin a celsius*/
const getTemp = (kelvin) => {
    return Number(convert(kelvin).from('K').to('C').toFixed(1));
}

/*funcion encargada de actualizar el icono*/
const getWeatherState = (weather) => {
    const { id } = weather;

    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 8000) {
        return SUN;
    } else {
        return CLOUD;
    }
}

export default transformWeather;