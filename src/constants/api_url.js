const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
const location = 'Bogota,co';
const api_key = '53693ad6eec34705172c7d89d8ecb8ba';
export const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;