import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';

const initialState = { 
    value: 1,
    // usename: 'kavi'
    // email: "hello@gmail.com"
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
         state.value = state.value + 1
        },
        decrement: (state) => {
            state.value -=1 // state.value = state.value + 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload // state.value = state.value + 1
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
