import convert from 'convert-units';

import {
    SUNNY,
} from '../constants/weathers';

/*funcion encargada de filtrar y transformar los datos para actualizar y alimentar las cosultas*/
const transformWeather = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const temperatureProps = getTemp(temp);
    const weatherState = getWeatherState(weather_data);

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
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
}

/*funcion encargada de actualizar el icono*/
const getWeatherState = (weather_data) => {
    return SUNNY;
}

export default transformWeather;