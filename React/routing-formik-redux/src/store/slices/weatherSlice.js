import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherData } from '../../api';

const getWeatherDescription = (code) => {
    if (code === 0) return "Ясно";
    if (code === 1 || code === 2 || code === 3) return "Облачно";
    if (code >= 45 && code <= 48) return "Туман";
    if (code >= 51 && code <= 67) return "Дождь";
    if (code >= 71 && code <= 77) return "Снег";
    if (code >= 80 && code <= 82) return "Ливень";
    if (code >= 95 && code <= 99) return "Гроза";
    return "Пасмурно";
};

export const fetchWeatherThunk = createAsyncThunk(
    'weather/fetchWeather',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { lat, lon } = state.geo;

        if (!lat || !lon) {
            return thunkAPI.rejectWithValue("Нет координат для запроса погоды");
        }

        try {
            const response = await getWeatherData(lat, lon);

            const { temperature, weathercode } = response.data.current_weather;

            return {
                temp: temperature > 0 ? `+${Math.round(temperature)}°C` : `${Math.round(temperature)}°C`,
                condition: getWeatherDescription(weathercode)
            };
        } catch (error) {
            return thunkAPI.rejectWithValue("Ошибка при получении погоды");
        }
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temperature: null,
        condition: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherThunk.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchWeatherThunk.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.temperature = payload.temp;
                state.condition = payload.condition;
            })
            .addCase(fetchWeatherThunk.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.error = payload;
            });
    },
});

export default weatherSlice.reducer;