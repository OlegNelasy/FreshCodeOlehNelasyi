import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGeoData } from "./../../api"


export const fetchCoordinatesThunk = createAsyncThunk(
    'location/fetchCoordinatesThunk',
    async (_, thunkAPI) => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                return reject(thunkAPI.rejectWithValue("Геолокация не поддерживается"));
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (error) => {
                    reject(thunkAPI.rejectWithValue("Доступ к геопозиции запрещен"));
                }
            );
        });
    }
);

export const fetchCityThunk = createAsyncThunk(
    'location/getCity',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { lat, lon } = state.geo;

        if (!lat || !lon) {
            return thunkAPI.rejectWithValue("Координаты отсутствуют");
        }

        try {
            const response = await getGeoData(lat, lon);
            const data = response.data;

            let city = data.locality || data.city || "Город не найден";
            return city.replace("ский район", "").replace(" район", "");
        } catch (error) {
            return thunkAPI.rejectWithValue("Ошибка при получении города");
        }
    }
);

export const fetchCountryThunk = createAsyncThunk(
    'location/getCountry',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { lat, lon } = state.geo;

        if (!lat || !lon) {
            return thunkAPI.rejectWithValue("Координаты отсутствуют");
        }

        try {
            const response = await getGeoData(lat, lon);
            const data = response.data;

            return data.countryName || "Страна не найдена";
        } catch (error) {
            return thunkAPI.rejectWithValue("Ошибка при получении страны");
        }
    }
);

const geoSlice = createSlice({
    initialState: {
        lat: null,
        lon: null,
        status: 'idle',
        error: null,

        city: "",
        cityStatus: 'idle',
        cityError: null,

        country: "",
        countryStatus: 'idle',
        countryError: null,
    },
    name: 'geo',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoordinatesThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCoordinatesThunk.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.lat = payload.lat;
                state.lon = payload.lon;
            })
            .addCase(fetchCoordinatesThunk.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.error = payload;
            })

            .addCase(fetchCityThunk.pending, (state) => {
                state.cityStatus = 'loading';
            })
            .addCase(fetchCityThunk.fulfilled, (state, { payload }) => {
                state.cityStatus = 'succeeded';
                state.city = payload;
            })
            .addCase(fetchCityThunk.rejected, (state, { payload }) => {
                state.cityStatus = 'failed';
                state.cityError = payload;
            })

            .addCase(fetchCountryThunk.pending, (state) => {
                state.countryStatus = 'loading';
            })
            .addCase(fetchCountryThunk.fulfilled, (state, { payload }) => {
                state.countryStatus = 'succeeded';
                state.country = payload;
            })
            .addCase(fetchCountryThunk.rejected, (state, { payload }) => {
                state.countryStatus = 'failed';
                state.countryError = payload;
            });
    },
});

export default geoSlice.reducer;