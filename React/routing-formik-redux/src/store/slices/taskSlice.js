import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTasks } from "./../../api"

const initialState = {
    tasksList: [],
    isFetching: false,
    error: null,
};

export const getTaskThunk = createAsyncThunk('tasks/getTasks', async (payload, thunkAPI) => {
    try {
        const { data } = await getTasks(10);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }
})

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const existingIds = state.tasksList.map(task => task.id);
            let nextId = 1;

            while (existingIds.includes(nextId)) {
                nextId++;
            }

            state.tasksList.push({
                id: nextId,
                // id: crypto.randomUUID(),
                text: action.payload,
                completed: false,
            });
        },
        deleteTask: (state, action) => {
            state.tasksList = state.tasksList.filter(task => task.id !== action.payload);
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.tasksList.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
    extraReducers: bulder => {
        bulder.addCase(getTaskThunk.pending, (state) => {
            state.isFetching = true;
            state.error = null;
        });
        bulder.addCase(getTaskThunk.fulfilled, (state, { payload }) => {
            state.tasksList = payload.map(({ id, title: text, completed }) => ({
                id,
                text,
                completed
            }));
            state.isFetching = false;
        });
        bulder.addCase(getTaskThunk.rejected, (state, { payload }) => {
            state.isFetching = false;
            state.error = payload;
        });
    },
});

export const { addTask, deleteTask, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;