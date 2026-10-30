import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'
import taskReducer from './slices/taskSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks: taskReducer,
    },
});

export default store;