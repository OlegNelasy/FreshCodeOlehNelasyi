import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import geoReducer from './slices/geoSlice';
import weatherReducer from './slices/weatherSlice';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        geo: geoReducer,
        weather: weatherReducer,
    },
});

export default store;