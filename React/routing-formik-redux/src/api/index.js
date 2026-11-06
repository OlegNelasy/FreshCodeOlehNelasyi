import axios from 'axios';

const axiosTaskInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

export const getTasks = (limit) => axiosTaskInstance.get('/todos', {
    params: { _limit: limit }
});

const axiosGeoInstance = axios.create({
    baseURL: 'https://api.bigdatacloud.net',
    params: {
        localityLanguage: 'ru'
    }
});

export const getGeoData = (lat, lon) => {
    return axiosGeoInstance.get('/data/reverse-geocode-client', {
        params: { latitude: lat, longitude: lon }
    });
};

const axiosWeatherInstance = axios.create({
    baseURL: 'https://api.open-meteo.com',
});

export const getWeatherData = (lat, lon) => {
    return axiosWeatherInstance.get('/v1/forecast', {
        params: {
            latitude: lat,
            longitude: lon,
            current_weather: true,
        }
    });
};