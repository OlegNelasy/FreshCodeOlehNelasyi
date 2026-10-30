import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

const reducers = {
    increment: (state, action) => {
        state.count += 1;
    },
    decrement: (state) => {
        state.count -= 1;
    },
    setCount: (state, action) => {
        state.count = action.payload;
    },
}

const counterSlice = createSlice({
    initialState,
    name: 'counter', // для инструментов
    reducers,
});

const { reducer, actions } = counterSlice;

export const { increment, decrement, setCount } = actions;
export default reducer;