import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    incremented: (state, action) => {
      state.counter += 1;
    },
    decremented: (state, action) => {
      state.counter -= 1;
    },
    addBy: (state, action) => {
      state.counter += 10;
    },
  },
});

export const { incremented, decremented, addBy } = counterSlice.actions;
