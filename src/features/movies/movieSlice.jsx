import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
  const movieText = "Harry";
  const res = await movieApi.get(`?apikey=${import.meta.env.VITE_API_KEY}&s=${movieText}&type=movie`);
  return res.data;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async () => {
  const seriesText = "Friends";
  const res = await movieApi.get(`?apikey=${import.meta.env.VITE_API_KEY}&s=${seriesText}&type=series`);
  return res.data;
});

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Success");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Success");
      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
