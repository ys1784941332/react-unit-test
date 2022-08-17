import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
}

export const CounterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },

    decrement: state => {
      state.value -= 1;
    },

    incrementByMount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },

    decrementByMount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    }
  }
})

export const CounterAction = CounterSlice.actions;
export const CounterReducer = CounterSlice.reducer;