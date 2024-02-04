import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterStore";

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
  },
});
