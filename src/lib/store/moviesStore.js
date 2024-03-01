import { createSlice } from "@reduxjs/toolkit";

export const moviesStore = createSlice({
  name: "movieStore",
  initialState: {
    movies: {},
  },
  reducers: {
    getMovies: (state, action) => {},
  },
});
