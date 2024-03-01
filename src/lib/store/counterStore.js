import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    todo: [],
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
  extraReducers: (builder) => {
    builder.addCase(incrementedAsync.fulfilled, (state, action) => {
      state.todo.push(action.payload);
    });
  },
});

export const incrementedAsync = createAsyncThunk("counter/incrementedAsync", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await response.json();
  return todo;
});

export const { incremented, decremented, addBy } = counterSlice.actions;
