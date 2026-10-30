import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasksList: [],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            // const existingIds = state.tasksList.map(task => task.id);
            // let nextId = 1;

            // while (existingIds.includes(nextId)) {
            //     nextId++;
            // }

            state.tasksList.push({
                // id: nextId,
                id: crypto.randomUUID(),
                text: action.payload,
                completed: false,
            });
        },
        deleteTask: (state, action) => {
            state.tasksList = state.tasksList.filter(task => task.id !== action.payload);
            // const { tasksList } = state;
            // tasksList = tasksList.filter(task => task.id !== action.payload);
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.tasksList.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
});

export const { addTask, deleteTask, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;